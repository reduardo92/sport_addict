import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import styled from 'styled-components';

const Styled = styled.div`
  display: grid;
  gap: 2em;
  grid-gap: 2em;

  .bio--text {
    margin-top: 1em;
  }

  .bio--read--more {
    background-color: transparent;
  }

  .read--more {
    display: block;
    cursor: pointer;
    transition: var(--cubicbezier);
    margin: 0 auto;
    background-color: var(--clr-primary);
    border-radius: 50%;
    padding: 0.25em;
    font-size: 1.7rem;
    color: var(--white-clr);

    &:hover {
      opacity: 0.8;
      transform: scale(0.9);
    }
  }
`;

interface BioProps {
  bio?: string;
}

const Bio: React.FC<BioProps> = ({ bio = '' }) => {
  const [bioActive, setBioActive] = useState(false);

  const bioCondetion = () => {
    if (bio.length === 0) return 'Sorry Nothing Available';
    if (bio.length <= 600) return bio;
    if (bioActive) return bio;
    return `${bio.slice(0, 600)}...`;
  };

  return (
    <Styled className='bio'>
      <p className='bio--text'>{bioCondetion()}</p>
      {bio.length >= 600 && (
        <button
          onClick={() => setBioActive(!bioActive)}
          className='bio--read--more'
        >
          {bioActive && <IoIosArrowUp className='read--more' />}
          {!bioActive && <IoIosArrowDown className='read--more' />}
        </button>
      )}
    </Styled>
  );
};

export default Bio;
