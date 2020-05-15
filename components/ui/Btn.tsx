import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { IoMdArrowDroprightCircle } from 'react-icons/io';

interface styledProps {
  bgColor?: boolean;
}

const Styled = styled.a<styledProps>`
  position: relative;
  background-color: ${({ bgColor }) =>
    bgColor ? 'var(--clr-second)' : 'var(--clr-primary)'};
  display: inline-block;
  padding: 0.4em 2em;
  color: var(--clr-white);
  font-weight: var(--fw-bold);
  font-size: var(--fs-btn);
  font-style: italic;
  text-transform: uppercase;
  letter-spacing: 4px;
  -webkit-clip-path: polygon(0 0, 100% 0, 93% 100%, 0% 100%);
  clip-path: polygon(0 0, 100% 0, 93% 100%, 0% 100%);
  transition: var(--ease-in);

  svg {
    transition: var(--ease-in);
    vertical-align: middle;
    font-size: 1.2rem;
  }

  &:hover,
  &:focus {
    transform: scale(0.96);
    color: var(--clr-white);

    svg {
      transform: translateX(5px);
    }
  }
`;

interface btnProps {
  href: string;
  as?: string;
  bgColor?: boolean;
}

const Btn = ({ href, as, bgColor }: btnProps) => (
  <Link href={href} as={as}>
    <Styled className='btn' bgColor={bgColor}>
      sign up <IoMdArrowDroprightCircle />
    </Styled>
  </Link>
);

export default Btn;
