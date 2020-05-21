import styled from 'styled-components';

interface GridAutoProps {
  columSize?: string;
  setWidth?: string;
}

export default styled.div<GridAutoProps>`
  display: grid;
  grid-gap: 3em 1em;
  /* grid-row-gap: 2em; */
  grid-template-columns: repeat(
    auto-fit,
    minmax(${({ columSize }) => (columSize ? columSize : '150px')}, 1fr)
  );
  justify-items: center;
  align-items: center;

  & > a,
  & > div {
    width: ${({ setWidth }) => (setWidth ? setWidth : '100%')};
  }
`;
