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

  & .favorite--btn {
    top: -14px;
    left: -19px;
    font-size: 0.75rem;
  }

  @media screen and (min-width: ${mediaSizes.table}) {
    & > :last-child {
      width: auto;
      padding: 2em;
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
        {leagues?.map((league) => (
          <Badge
            key={league.idLeague}
            href='/sports/[sport]/[sportName]/[id]'
            as={`/sports/${league.strSport}/${league.strLeague}/${league.idLeague}`}
            title={league.strLeague}
            src={league.strBadge}
            clr
            setScroll
            isFavorite={{ favItem: league, id: league.idLeague }}
          />
        ))}
      </SimpleFlex>
    </Styled>
  );
};
