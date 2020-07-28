import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  ChangeEvent,
  FormEvent,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { BsSearch } from 'react-icons/bs';
import { FaSocks } from 'react-icons/fa';
import { MdClear } from 'react-icons/md';
import styled from 'styled-components';
import SportContext from '../context/SportsData/SportContext';
import { CLEAR_SEARCH_DATA } from '../context/types';

const Styled = styled.div<{ isOption: boolean }>`
  background-color: var(--clr-white);
  padding: 0;
  box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.2);

  .search--form {
    padding: 0;
    position: relative;

    .control {
      .input {
        border-color: transparent;
      }
    }
  }

  .select {
    position: relative;
    background-color: transparent;

    select {
      background-color: var(--clr-white);
      flex: 1;
      cursor: pointer;
      border-color: transparent;
      font-weight: var(--fw-bold);
      color: var(--clr-second);
      cursor: pointer;
      background-color: var(--clr-second);
      color: var(--clr-white);
      border-radius: 0;
      &:hover,
      &:focus {
        opacity: 0.9;
      }
    }
  }

  .select:not(.is-multiple):not(.is-loading)::after {
    border-color: var(--clr-white) !important;
  }

  .search--content {
    height: auto;
    overflow-y: auto;
    box-shadow: 0 11px 15px rgba(0, 0, 0, 0.28);

    & > .search--content--item:first-child {
      border-top: 1px solid rgba(0, 0, 0, 0.1);
    }

    & > .search--content--item:last-child {
      border-top: none;
    }
  }

  .search--content--item {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 0.1em 1em;
    transition: var(--ease--in--out--02s);
    cursor: pointer;
    &:hover {
      background-color: rgba(196, 196, 196, 0.4);
    }

    &__name {
      color: var(--second-clr);
      margin-bottom: 0;
      margin-left: 1em;

      .media--in {
        color: rgb(151, 151, 151);
        margin-left: 0.3em;
      }
    }

    &:hover .search--content--item__name,
    &:hover .search--content--item__icon {
      color: var(--primary-clr);
    }
  }

  .wrapper {
    margin: 0 auto;
    max-width: 920px;
    display: flex;
    align-items: center;
    font-size: 0.9em;
    color: var(--second-clr);
    text-transform: capitalize;
  }

  @media screen and (min-width: 1000px) {
    .form {
      padding: 0;
    }

    .form--clear {
      right: 2%;
      transform: translate(-2%, -50%);
    }
  }
`;

interface SearchFromProps {}

const SearchFrom: React.FC<SearchFromProps> = () => {
  const { getSearchData, clearData, searchData } = useContext(SportContext);
  const [form, setForm] = useState({ search: '', option: 'team' });
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [optionFocus, setOptionFocus] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const router = useRouter();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  useEffect(() => {
    if (form.search === '') {
      clearData!(CLEAR_SEARCH_DATA);
      return;
    } else {
      getSearchData!(form.search);
    }
  }, [form.search]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.search === '') {
      console.log('enter something');
    } else {
      console.log('loged', form.search);
      router.push('/form.search/[query]', `/search/${form.search}`);
    }
    setForm({ search: '', option: 'team' });
  };

  console.log(form);
  return (
    <Styled className='search form' isOption={optionFocus}>
      <form className='search--form container' onSubmit={handleSubmit}>
        <div className='field has-addons'>
          <p className='control '>
            <span className='select'>
              <select onChange={handleChange} name={form.option}>
                <option value='team'>Team</option>
                <option value='player'>Palyer</option>
                <option value='event'>Event</option>
              </select>
            </span>
          </p>
          <div className='control has-icons-left has-icons-right  is-expanded'>
            <input
              className='input'
              ref={inputRef}
              type='text'
              name='search'
              value={form.search}
              onChange={handleChange}
              onClick={() => setIsFocus(true)}
              onBlur={() => setTimeout(() => setIsFocus(false), 300)}
              placeholder='Search for a movie, tv show, person...'
            />
            <BsSearch className='logout--icon icon is-small is-left' />
          </div>
          {(isFocus === true || form.search !== '') && (
            <p className='control'>
              <MdClear
                className='icon is-small is-right'
                onClick={() => console.log('gelp')}
              />
            </p>
          )}
        </div>
      </form>
      <div className='search--content'>
        {isFocus &&
          searchData &&
          searchData.map((item, i) => (
            <Link key={i} href={`/`} as={`/`}>
              <a className='search--tag' aria-label='hello'>
                <div
                  key={i}
                  onClick={() => setForm({ search: '', option: 'team' })}
                  className='search--content--item'
                >
                  <div className='wrapper'>
                    <FaSocks />
                    <p className='search--content--item__name'>
                      hello
                      <span className='media--in'>Team</span>
                    </p>
                  </div>
                </div>
              </a>
            </Link>
          ))}
      </div>
    </Styled>
  );
};

export default SearchFrom;
