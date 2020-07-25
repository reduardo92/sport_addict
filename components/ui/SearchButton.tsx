import React from 'react';
import { BsSearch } from 'react-icons/bs';
import styled from 'styled-components';

const Styled = styled.button`
  background: none;
  color: var(--clr-white);
  cursor: pointer;

  &:hover,
  &:focus {
    .logout--icon {
      transform: scale(0.9);
      color: var(--clr-primary);
    }
  }
  .logout--icon {
    font-size: 1.3rem;
    transition: var(--cubicbezier);
  }
`;

interface SearchButtonProps {
  onclick?: () => void;
}

const SearchButton: React.FC<SearchButtonProps> = ({ onclick }) => {
  return (
    <Styled className='search--button' onClick={onclick}>
      <BsSearch className='logout--icon' />
    </Styled>
  );
};

export default SearchButton;
