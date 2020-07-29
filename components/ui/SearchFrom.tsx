import Link from 'next/link';
import {
  ChangeEvent,
  FormEvent,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { BsSearch } from 'react-icons/bs';
import { MdClear } from 'react-icons/md';
import styled, { css } from 'styled-components';
import SportContext from '../context/SportsData/SportContext';
import { CLEAR_SEARCH_DATA } from '../context/types';
import FadeIn from './StyleComponents/keyFrames/FadeIn';

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
    }

    &:hover,
    &:focus {
    }

    ${({ isOption }) =>
      isOption &&
      css`
        border-radius: 0;
        background-color: var(--clr-second);
        color: var(--clr-white);
        border-radius: 0;
        select {
          background-color: var(--clr-second);
          color: var(--clr-white);
          border-radius: 0;
        }
      `}
  }

  .select:not(.is-multiple):not(.is-loading)::after {
    border-color: var(--clr-third) !important;
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
    animation: ${FadeIn} 0.2s ease-in;

    &:hover {
      background-color: rgba(196, 196, 196, 0.4);
    }

    &__name {
      margin: 0 0.5em 0 1em;
      color: var(--clr-second);
      font-weight: bold;

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
    max-width: 71.31rem; /* 1141px; */
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
  }
`;

interface SearchFromProps {}

const SearchFrom: React.FC<SearchFromProps> = () => {
  const { getSearchData, clearData, searchData } = useContext(SportContext);
  const [form, setForm] = useState({ search: '', option: 'team' });
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [optionFocus, setOptionFocus] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  useEffect(() => {
    if (form.search === '') {
      clearData!(CLEAR_SEARCH_DATA);
      return;
    } else {
      getSearchData!(form.search, form.option);
    }
  }, [form.search]);

  console.log(form);
  return (
    <Styled className='search form' isOption={optionFocus}>
      <form
        className='search--form container'
        onSubmit={(e: FormEvent<HTMLFormElement>) => e.preventDefault()}
      >
        <div className='field has-addons'>
          <p className='control '>
            <span className='select'>
              <select
                onChange={handleChange}
                name='option'
                onFocus={() => setOptionFocus(true)}
                onBlur={() => setOptionFocus(false)}
              >
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
              placeholder={`Search for a ${
                form.option === 'team'
                  ? 'team'
                  : form.option === 'player'
                  ? 'player'
                  : 'event'
              }...`}
            />
            <BsSearch className='logout--icon icon is-small is-left' />
          </div>
          {(isFocus === true || form.search !== '') && (
            <p className='control'>
              <MdClear
                className='icon is-small is-right'
                onClick={() => setForm({ ...form, search: '' })}
              />
            </p>
          )}
        </div>
      </form>
      <div className='search--content'>
        <ul>
          {searchData?.map((item, i) => (
            <li key={i}>
              <Link
                key={i}
                href={
                  item.idPlayer
                    ? '/player/[playerName]'
                    : item.idEvent
                    ? '/events/[eventSport]/[eventName]/[id]'
                    : '/team/[teamName]/[id]'
                }
                as={
                  item.idPlayer
                    ? `/player/${item.strPlayer}`
                    : item.idEvent
                    ? `/events/${item.strSport}/${item.strEvent}/${item.idEvent}`
                    : `/team/${item.strTeam}/${item.idTeam}`
                }
              >
                <a className='search--tag' aria-label='hello'>
                  <div
                    onClick={() => setForm({ search: '', option: 'team' })}
                    className='search--content--item'
                  >
                    <div className='wrapper'>
                      <figure className='image is-48x48'>
                        <img
                          className='is-rounded'
                          src={
                            item.strCutout ||
                            item.strThumb ||
                            item.strTeamBadge ||
                            '/icons/noBadge.png'
                          }
                        />
                      </figure>
                      <p className='search--content--item__name'>
                        {item.idPlayer
                          ? item.strPlayer
                          : item.idEvent
                          ? item.strEvent
                          : item.strTeam}
                      </p>
                      <figure className='media--in image is-16x16'>
                        <img
                          className='is-rounded'
                          src={`/icons/${item.strSport.replace(' ', '_')}.png`}
                        />
                      </figure>
                    </div>
                  </div>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Styled>
  );
};

export default SearchFrom;
