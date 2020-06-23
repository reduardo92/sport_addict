import React, { useContext } from 'react';
import styled from 'styled-components';
import SportContext from '../context/SportsData/SportContext';

const Styled = styled.figure`
  cursor: pointer;
  transition: var(--cubicbezier);

  &:hover,
  &:focus {
    transform: scale(0.95);
  }
`;

interface ImgColumProps {
  item: string;
  isColumn?: boolean;
  className?: string;
}

const ImgColum: React.FC<ImgColumProps> = ({ item, isColumn, className }) => {
  const { setModalImg } = useContext(SportContext);

  return (
    <Styled
      className={`image img--colum ${isColumn && 'column'} ${className}`}
      onClick={() => setModalImg!(item)}
    >
      <img src={item} alt='image' />
    </Styled>
  );
};

export default ImgColum;
