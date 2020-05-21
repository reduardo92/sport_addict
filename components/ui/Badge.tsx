import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Paragraph from './Paragraph';
import Spinner from './StyleComponents/Styless/Spinner';

const Styled = styled.a`
  transition: var(--cubicbezier);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > .para {
    width: fit-content;
    font-weight: bold;
  }

  &:hover,
  &:focus {
    filter: grayscale(0.8);
    opacity: 0.8;
  }
`;

interface BadgeProps {
  href: string;
  as: string;
  title: string;
  src?: string;
  className?: string;
  setScroll?: boolean;
  clr?: boolean;
  onload?: boolean;
}

const Badge: React.FC<BadgeProps> = ({
  href,
  as,
  title,
  src,
  setScroll = false,
  className,
  clr,
  onload = false,
}) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  return (
    <Link href={href} as={as} scroll={setScroll}>
      <Styled className={`link--tag ${className}`} title={title}>
        {onload && !isLoaded && <Spinner />}

        <img
          onLoad={() => setIsLoaded(true)}
          className='link--tag__img'
          src={src || '/icons/notAvailable.png'}
          alt={title}
        />

        <Paragraph text={title} clr={clr} />
      </Styled>
    </Link>
  );
};

export default Badge;
