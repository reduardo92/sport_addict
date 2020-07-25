import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import setDateFormat from '../../utility/setDateFormat';
import EventsProps from '../interfaces/Events';

const Styled = styled.div`
  & + & {
    margin: 2em 0;
  }

  .date {
    font-size: 0.8rem;
    &--link {
      color: var(--clr-white);
      color: var(--clr-primary);
    }
  }

  .event--thumbnail {
    max-width: 25em; // 400px
    margin: auto;
    transition: var(--cubicbezier);

    &:hover,
    &:focus {
      transform: scale(0.98);
      filter: grayscale(1);
    }
  }

  .event--name {
    font-size: 0.85rem;
    color: var(--clr-white);
    transition: var(--cubicbezier);
    display: block;

    &:hover,
    &:focus {
      color: var(--clr-primary);
      transform: scale(0.98);
    }
  }
`;

interface NoneTeamEventProps {
  item: EventsProps;
  isNext?: boolean;
}

const NoneTeamEvent: React.FC<NoneTeamEventProps> = ({ item, isNext }) => {
  //   console.log('from none Team Events', item);S
  return (
    <Styled className='noneTeamEvent'>
      <div className='date'>
        <Link
          href='/event/[eventName]/[eventId]'
          as={`/event/${item.strEvent}/${item.idEvent}`}
        >
          <a className='date--link'>{setDateFormat(item.dateEvent)}</a>
        </Link>
        {isNext && <p className='stats--time'>{item.strTimeLocal}</p>}
      </div>

      <div className='event--thumbnail'>
        <Link
          href='/event/[eventName]/[eventId]'
          as={`/event/${item.strEvent}/${item.idEvent}`}
        >
          <a className='date--link'>
            <img
              className='event--tumbnail__thumb'
              src={item.strThumb || '/icons/notAvailable.png'}
              alt={item.strEvent}
            />
          </a>
        </Link>
      </div>
      <Link
        href='/event/[eventName]/[eventId]'
        as={`/event/${item.strEvent}/${item.idEvent}`}
      >
        <a className='event--name'>{item.strEvent}</a>
      </Link>
    </Styled>
  );
};

export default NoneTeamEvent;
