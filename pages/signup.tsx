import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { ChangeEvent, useContext, useEffect, useRef } from 'react';
import { FaUpload } from 'react-icons/fa';
import { MdClear } from 'react-icons/md';
import AlertContext from '../components/context/alert/AlertContext';
import AuthContext from '../components/context/auth/AuthContext';
import useFrom from '../components/Hooks/useForm';
import Btn from '../components/ui/Btn';
import Input from '../components/ui/Input';
import Button from '../components/ui/StyleComponents/Styless/Button';
import FormSectionStyles from '../components/ui/StyleComponents/Styless/FormSectionStyles';
import { auth, storage } from '../LIB/db';

const signup = () => {
  const {
    state: { user },
  } = useContext(AuthContext);
  const { setAlert } = useContext(AlertContext);

  const fileRef = useRef<HTMLInputElement>(null);

  const { push } = useRouter();

  useEffect(() => {
    if (user) {
      push('/');
    }
    // eslint-disable-next-line
  }, [user]);

  const submit = async () => {
    if (userName === '' || email === '' || password === '') {
      setAlert!('Please Fill all fields', 'danger');
      return;
    }
    if (password !== password2) {
      setAlert!('Passwords dont macth', 'danger');
      return;
    }
    try {
      await auth.createUserWithEmailAndPassword(email, password);

      if (avatar) {
        onFileChange();
      }

      setAlert!('Thanks for signing up, ', 'success');
      push('/');
    } catch (err) {
      setAlert!(err.message, 'danger');
    }
  };

  const { handleChange, handleSubmit, form, setForm } = useFrom(
    {
      userName: '',
      email: '',
      password: '',
      password2: '',
      avatar: '',
    },
    submit
  );

  const { userName, email, password, password2, avatar } = form;

  const onFileChange = async () => {
    const user = auth.currentUser;
    const storageRef = storage.ref(`${user?.uid}`);
    const fileReff = storageRef.child(`avatar/${avatar.name}`);
    await fileReff.put(avatar);
    // Set Current user Display Name and Photo Url
    user?.updateProfile({
      photoURL: await fileReff.getDownloadURL(),
      displayName: userName,
    });
  };

  const validateImage = (e: ChangeEvent<HTMLInputElement>) => {
    const imgType = ['image/png', 'image/jpeg'];

    if (!imgType.includes(e.target.files![0]['type'])) {
      setAlert!('Invalid Image File', 'danger');
      return;
    }

    setForm({ ...form, avatar: e.target.files![0] });
  };
  console.log(avatar);
  return (
    <FormSectionStyles className='sign--up'>
      <div className='side--content'>
        <div className='side--content__inner'>
          <h2 className='title'>Join The Sport Addict</h2>
          <ul className='benefits'>
            <li className='benefits__tab'>personalised profile</li>
            <li className='benefits__tab'>Saved your favorite leagues</li>
            <li className='benefits__tab'>Saved your favorite Teams</li>
            <li className='benefits__tab'>Saved your favorite Players</li>
          </ul>
          <Btn title='log In' href='/login' />
        </div>
        <video autoPlay muted loop className='video--bg'>
          <source src='/bg_video.mp4' type='video/mp4' />
        </video>
      </div>
      <div className='form--content'>
        <div className='inner'>
          <h2 className='header'>Sign up for an account</h2>
          <p className='para text-dark'>
            Signing up for an account is free and easy. Fill out the form below
            to get started.
          </p>
          <form className='form signIn--form' onSubmit={handleSubmit}>
            <Input
              label='UserName'
              name='userName'
              value={userName}
              type='text'
              handleChange={handleChange}
              placeholder='Enter Username'
              aria_describedby='Enter Username'
              minLength={3}
            />
            <Input
              label='Email'
              name='email'
              value={email}
              type='email'
              handleChange={handleChange}
              placeholder='Enter Email'
              aria_describedby='Enter Email'
            />
            <Input
              label='Password'
              name='password'
              value={password}
              type='password'
              handleChange={handleChange}
              placeholder='Enter password'
              aria_describedby='Enter password'
              minLength={6}
            />
            <Input
              label='Confirm Password'
              name='password2'
              value={password2}
              type='password'
              handleChange={handleChange}
              placeholder='Confirm password'
              aria_describedby='confirm password'
              minLength={6}
            />
            <div className='avatar' style={{ marginBottom: '1em' }}>
              <label className='label' htmlFor='avatar'>
                Optional Avatar
              </label>
              <div className='file has-name'>
                <label className='file-label'>
                  <input
                    ref={fileRef}
                    id='avatar'
                    name='avatar'
                    className='file-input'
                    onChange={
                      (e) => validateImage(e)
                      // if (e.target.files![0].type === 'png')
                      // setForm({ ...form, avatar: e.target.files![0] });
                    }
                    type='file'
                    aria-describedby='Avatar file upload'
                  />
                  <span className='file-cta'>
                    <span className='file-icon'>
                      <FaUpload />
                    </span>
                    <span className='file-label'>Choose a file…</span>
                  </span>
                  <span className='file-name'>
                    {avatar !== '' && avatar.name}
                  </span>
                </label>
                {avatar !== '' && (
                  <span
                    className='clear--file'
                    onClick={() => setForm({ ...form, avatar: '' })}
                    style={{
                      marginLeft: '1em',
                      display: 'flex',
                      alignItems: 'center',
                      cursor: 'pointer',
                    }}
                  >
                    <MdClear />
                  </span>
                )}
              </div>
            </div>

            <Button title='Sign Up' type='submit' />
            <Link href='/'>
              <a className='cancel'>Cancel</a>
            </Link>
          </form>
        </div>
      </div>
    </FormSectionStyles>
  );
};

export default signup;
