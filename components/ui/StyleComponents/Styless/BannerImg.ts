import styled from 'styled-components';
import { mediaSizes } from '../../variables/variables';

interface BannerProps {
  bannerHero: string;
}

export default styled.div<BannerProps>`
  min-height: 20vh;
  background: url(${({ bannerHero }) =>
      bannerHero ? bannerHero : '/imgs/grass.jpg'})
    no-repeat;
  background-size: cover;
  background-position: center;

  @media screen and (min-width: ${mediaSizes.laptop}) {
    min-height: 35vh;
  }
`;
