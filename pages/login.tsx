import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react';
import AlertContext from '../components/context/alert/AlertContext';
import AuthContext from '../components/context/auth/AuthContext';
import useForm from '../components/Hooks/useForm';
import Btn from '../components/ui/Btn';
import Input from '../components/ui/Input';
import Button from '../components/ui/StyleComponents/Styless/Button';
import FormSectionStyles from '../components/ui/StyleComponents/Styless/FormSectionStyles';
import { auth } from '../LIB/db';

const login = () => {
  const {
    state: { user },
  } = useContext(AuthContext);
  const { setAlert } = useContext(AlertContext);

  useEffect(() => {
    if (user) {
      push('/');
    }
    // eslint-disable-next-line
  }, [user]);

  const { push } = useRouter();

  const submit = async () => {
    if (email === '' || password === '') {
      setAlert!('Please Fill all fields', 'danger');
      return;
    }

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setAlert!('Welcome Back', 'success');
      push('/');
    } catch (err) {
      setAlert!(err.message, 'danger');
    }

    setForm({
      email: '',
      password: '',
    });
  };

  const { handleChange, handleSubmit, form, setForm } = useForm(
    {
      email: '',
      password: '',
    },
    submit
  );

  const { email, password } = form;

  return (
    <FormSectionStyles className='log--in' log>
      <div className='side--content'>
        <div className='side--content__inner'>
          <h2 className='title'>Welcome Back</h2>
          <ul className='benefits'>
            <li className='benefits__tab'>Enjoy your favorite sports</li>
            <li className='benefits__tab'>Build a personal Profile</li>
            <li className='benefits__tab'>Make your own favorite list</li>
          </ul>
          <Btn title='Sign Up' href='/signup' />
        </div>
        <video autoPlay muted loop className='video--bg'>
          <source src='/bg_video.mp4' type='video/mp4' />
        </video>
      </div>
      <div className='form--content'>
        <div className='inner'>
          <h2 className='header'>Login to your account</h2>
          <p className='para text-dark'>
            welcome back, log in to access all your accont information.
          </p>
          <form className='form signIn--form' onSubmit={handleSubmit}>
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
            <Button title='Log In' type='submit' />
            <Link href='/'>
              <a className='cancel'>Cancel</a>
            </Link>
          </form>
        </div>
      </div>
    </FormSectionStyles>
  );
};

export default login;
