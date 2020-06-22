import React, { useContext } from 'react';
import styled from 'styled-components';
import MovieContext from '../../context/MovieContext';
import { IMG_URL, IMG_URL_OR } from '../../context/types';
import groupCredits from '../../utility/groupCredits';
import timeConvert from '../../utility/timeConvert';
import CirclePercentage from '../CirclePercentage';
import TagGroup from '../TagGroup';
import PlayButton from '../PlayButton';
import Link from 'next/link';
import getRating from '../../utility/getRating';
import CrewTab from './CrewTab';

const Styled = styled.div`
  margin-bottom: 2em;

  .inner--content {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 1.7em 0.4em;
  }

  .rating,
  .meta,
  .overview,
  .crew,
  .play--button {
    grid-column: 1/ 3;
  }

  .rating {
    svg {
      margin-right: 1em;
    }
  }

  .title {
    align-self: center;
    font-size: calc(0.5em + 3vw);
  }

  /* profile--content__img */
  .profile--content__img {
    width: 120px;
    margin-top: -8em;
    align-self: flex-end;
  }

  .year {
    opacity: 0.6;
    font-weight: 400;
  }

  .rating,
  .meta {
    display: flex;
    align-items: center;
    padding: 0 0.5em;
  }

  .tag--group {
    border-left: 1px solid #7b7b7b;
    padding-left: 1.5em;
  }

  /* /// */
  .meta {
    justify-content: space-between;
    font-size: 0.95rem;
    align-items: stretch;

    &--tab {
      border-right: 1px solid #7b7b7b;
      padding: 0 calc(2em - 1em);
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &--tab:last-child {
      border: none;
      padding: 0;
      padding-left: 1em;
      flex-wrap: wrap;
      justify-content: space-evenly;
    }
  }

  .crew {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1em;
    font-weight: bold;

    .subTitle {
      grid-column: 1 / 3;
      margin-bottom: -0.1em;
    }
  }

  .play--button {
    width: fit-content;
  }

  @media screen and (min-width: 768px) {
    .profile--header {
      max-width: 1100px;
      padding: 2em 1em;
    }

    .profile--content__img {
      width: 160px;
      justify-self: center;
    }
    .title {
      align-self: flex-end;
    }

    .rating {
      grid-column: 1 /2;
    }

    .meta {
      grid-column: 2 /3;
      justify-self: center;
    }

    .overview,
    .crew {
      grid-column: 1/ 3;
    }

    .play--button {
      flex-direction: row;
      font-size: 1.1rem;

      &::before {
        width: auto;
        margin: auto;
        transform-origin: left;
      }

      svg {
        font-size: 2rem;
        order: 1;
        margin-left: 5px;
      }

      &:hover svg,
      &:focus svg {
        margin-left: 15px;
        margin-bottom: 0;
        transform: scale(0.98);
      }
    }

    .CircularProgressbar {
      width: 66px;
    }
  }

  @media screen and (min-width: 1100px) {
    background: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)),
      url(${({ bgImg }) => `${IMG_URL_OR}${bgImg}`}) no-repeat center;
    background-color: black;
    /* min-height: 500px; */
    background-size: cover;
    background-position: top;
    background-attachment: fixed;
    object-fit: cover;
    position: relative;
    padding: 8em 1em;
    margin-bottom: 0;

    .inner--content {
      max-width: 1500px;
      margin: 0 auto;
      grid-template-areas:
        'prImg title title'
        'prImg rating play'
        'prImg meta meta'
        'prImg overV overV'
        'prImg crew crew';
      grid-template-columns: 500px 1fr 1.7fr;
      grid-gap: 2em;
    }

    .profile--content__img {
      grid-area: prImg;
      width: 100%;
      align-self: end;
      /* max-width: 450px; */
      height: 100%;
      justify-self: center;

      img {
        height: 100%;
        object-fit: contain;
      }
    }
    .title {
      grid-area: title;
      font-size: 3.5rem;
      margin-bottom: -0.3em;
      .year {
        font-size: smaller;
      }
    }
    .rating {
      grid-area: rating;
    }
    .meta {
      grid-area: meta;
      justify-self: start;
      align-self: center;

      &--tab {
        padding: 1em 2em;
      }

      .genre--tab {
        margin: 0 0.45em;
      }
    }
    .overview {
      grid-area: overV;
      &--para {
        max-width: 90%;
      }
    }
    .crew {
      grid-area: crew;
      grid-template-columns: repeat(3, 1fr);
      align-self: baseline;

      .subTitle {
        grid-column: 1 / 4;
      }
    }
    .play--button {
      grid-area: play;
      align-self: center;
    }
  }
`;

const ProfileHeader = ({ data, bgImg }) => {
  const { setModal } = useContext(MovieContext);

  const getGenres = () =>
    data.genres.map((item, i) => (
      <span className='genre--tab' key={item.name}>
        {item.name}
        {data.genres.length - 1 === i ? '' : ', '}
      </span>
    ));

  const crew = (
    <>
      {data.created_by &&
        data.created_by.map((item) => <CrewTab key={item.id} crew={item} />)}
      {groupCredits(data.credits.crew)
        .slice(0, 6)
        .map((item) => (
          <CrewTab key={item[0].id} crew={item[0]} />
        ))}
    </>
  );

  return (
    <Styled className='profile--content px-2' bgImg={bgImg}>
      <div className='inner--content'>
        <div className='profile--content__img'>
          <img
            className='poster'
            src={`${IMG_URL}${data.poster_path || data.profile_path}`}
            alt={data.title || data.name}
          />
        </div>
        <h2 className='title'>
          {data.title || data.name}{' '}
          <span className='year'>
            (
            {data.release_date
              ? data.release_date.slice(0, 4)
              : data.first_air_date.slice(0, 4)}
            )
          </span>
        </h2>
        <div className='rating'>
          <CirclePercentage value={data.vote_average * 10} />
          <TagGroup media={data} />
        </div>
        <div className='meta'>
          <span className='release meta--tab'>
            {data.release_date
              ? data.release_date.slice(0, 4)
              : data.first_air_date.slice(0, 4)}
          </span>
          <span className='runtime meta--tab'>
            {timeConvert(
              data.typeFor === 'movie' ? data.runtime : data.episode_run_time[0]
            )}
          </span>
          <span className='rating meta--tab'>
            {data.release_date
              ? getRating(data.release_dates.results)
              : getRating(data.content_ratings.results)}
          </span>
          <span className='genre meta--tab'>{getGenres()}</span>
        </div>
        <div className='overview'>
          <h3 className='subTitle'>OVERVIEW</h3>
          <p className='overview--para'>{data.overview}</p>
        </div>
        <div className='crew'>
          <h3 className='subTitle'>Featured Crew</h3>
          {crew}
        </div>
        <PlayButton onclick={() => setModal(data.videos.results[0].key)} />
      </div>
    </Styled>
  );
};

export default ProfileHeader;
