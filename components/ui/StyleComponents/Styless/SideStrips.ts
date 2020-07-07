import styled, { css } from 'styled-components';

interface SideProps {
  isBlackStrip?: boolean;
  mirror?: boolean;
}

export default styled.div<SideProps>`
  background: url('/imgs/${({ isBlackStrip = false }) =>
    isBlackStrip ? 'blackStrip' : 'yellowStrip'}.png') no-repeat center center;
  background-size: cover;
  height: 100%;
  width: 100%;

 ${({ mirror }) =>
   mirror &&
   css`
     transform: scale(-1);
   `}
`;
