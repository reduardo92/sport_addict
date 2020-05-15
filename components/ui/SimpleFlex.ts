import styled from 'styled-components';

interface SimpleFlexProps {
  setWidth?: string;
}

const SimpleFlex = styled.div<SimpleFlexProps>`
  display: flex;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scroll-snap-points-x: repeat(
    ${({ setWidth }) => (setWidth ? setWidth : '100%')}
  );
  scroll-snap-type: mandatory;
  padding: 1em 0;
  scrollbar-width: thin;
  scrollbar-color: var(--primary-clr) var(--accent-clr);

  & > div,
  & > a {
    flex-shrink: 0;
    width: ${({ setWidth }) => (setWidth ? setWidth : '100%')};
    margin: 0 1em;

    &:first-child {
      margin-left: 0;
    }
  }

  @media screen and (min-width: 1100px) {
    ::-webkit-scrollbar {
      height: 10px;
      background-color: #f5f5f5;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #535353;
    }

    ::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: #f5f5f5;
    }
  }
`;
export default SimpleFlex;
