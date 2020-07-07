import styled from 'styled-components';

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
`;
