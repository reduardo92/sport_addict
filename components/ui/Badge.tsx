import Link from 'next/link';
import React from 'react';
import styled, { css } from 'styled-components';
import FavoriteBtn, { FavoriteBtnProps } from './FavoriteBtn';
import Paragraph from './Paragraph';

const Styled = styled.div<{ isFavorite: boolean }>`
  position: relative;

  .link--tag {
    transition: var(--cubicbezier);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  & > .para {
    width: fit-content;
    font-weight: bold;
  }

  &:hover,
  &:focus {
    filter: grayscale(0.8);
    opacity: 0.8;
  }

  ${({ isFavorite }) =>
    isFavorite &&
    css`
      & > :last-child {
        position: absolute;
        top: 10px;
        left: 0;
        visibility: hidden;
        transform: scale(0.3) rotate(200deg);
        transition: transform 0.2s linear;
      }
      &:hover > :last-child {
        visibility: visible;
        transform: scale(1) rotate(0deg);
      }
    `}
`;

interface BadgeProps {
  href: string;
  as: string;
  title: string;
  src?: string;
  className?: string;
  setScroll?: boolean;
  clr?: boolean;
  isFavorite?: FavoriteBtnProps;
}

const Badge: React.FC<BadgeProps> = ({
  href,
  as,
  title,
  src,
  setScroll = false,
  className,
  clr,
  isFavorite,
}) => {
  return (
    <Styled
      className={`badge ${className}`}
      title={title}
      isFavorite={isFavorite ? true : false}
    >
      <Link href={href} as={as} scroll={setScroll}>
        <a className='link--tag'>
          <img
            className='link--tag__img'
            src={src || '/icons/notAvailable.png'}
            alt={title}
          />
          <Paragraph text={title} clr={clr} />
        </a>
      </Link>

      {isFavorite && (
        <FavoriteBtn favItem={isFavorite.favItem} id={isFavorite.id} />
      )}
    </Styled>
  );
};

export default Badge;
