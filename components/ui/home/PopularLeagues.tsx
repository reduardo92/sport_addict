import styled from 'styled-components';
import { Leagues } from '../../interfaces/legues';
import Badge from '../Badge';
import SimpleFlex from '../SimpleFlex';
import Title from '../Title';
import { mediaSizes } from '../variables/variables';
const Styled = styled.section`
  /* background-color: var(--clr-second); */
  background: url('/imgs/black_bg.jpg') no-repeat center center;
  background-size: cover;
  /* min-height: 80vh; */
  height: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > :last-child {
    & img {
      pointer-events: none;
    }
  }

  @media screen and (min-width: ${mediaSizes.table}) {
    & > :last-child {
      width: auto;
    }
  }
`;

interface PopularLeaguesProps {
  leagues?: Leagues[];
}

export default ({ leagues }: PopularLeaguesProps) => {
  return (
    <Styled className=''>
      <Title title='Popular Leagues' />
      <SimpleFlex setWidth='60px'>
        {leagues?.map(({ idLeague, strBadge, strLeague, strSport }) => (
          <Badge
            key={idLeague}
            href='/sports/[sport]/[sportName]/[id]'
            as={`/sports/${strSport}/${strLeague}/${idLeague}`}
            title={strLeague}
            src={strBadge}
            clr
          />
        ))}
      </SimpleFlex>
    </Styled>
  );
};

// <Link
// key={idLeague}
// href='/sports/[sport]/[sportName]/[id]'
// as={`/sports/${strSport}/${strLeague}/${idLeague}`}
// >
// <a className='link--tag' title={strLeague}>
//   <img className='link--tag__img' src={strBadge} alt={strLeague} />
// </a>
// </Link>
