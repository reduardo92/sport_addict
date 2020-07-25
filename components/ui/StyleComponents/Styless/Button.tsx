import { IoMdArrowDroprightCircle } from 'react-icons/io';
import styled, { css } from 'styled-components';

interface styledProps {
  bgColor?: boolean;
  whiteBtn?: boolean;
}

const Styled = styled.button<styledProps>`
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
  font-size: var(--fs-btn);
  cursor: pointer;

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

  ${({ whiteBtn }) =>
    whiteBtn &&
    css`
      background-color: var(--clr-white);
      color: var(--clr-second);

      &:hover,
      &:focus {
        color: var(--clr-second);
      }
    `}
`;

export interface BtnProps {
  type?: 'button' | 'submit' | 'reset';
  bgColor?: boolean;
  title?: string;
  whiteBtn?: boolean;
}

const Button = ({ type, bgColor, title = 'view more', whiteBtn }: BtnProps) => (
  <Styled className='btn' bgColor={bgColor} whiteBtn={whiteBtn} type={type}>
    {title} <IoMdArrowDroprightCircle />
  </Styled>
);
export default Button;
