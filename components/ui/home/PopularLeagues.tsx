import styled from 'styled-components';
import Title from '../Title';
import SimpleFlex from '../SimpleFlex';
import { popularLeague } from '../../interfaces/legues';
import Link from 'next/link';
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

  .content {
    display: flex;

    img {
      width: 60px;
    }
  }
`;

interface PopularLeaguesProps {
  leagues?: popularLeague[];
}

export default ({ leagues }: PopularLeaguesProps) => {
  return (
    <Styled className=''>
      <Title title='Popular Leagues' />
      {/* <div className='content'> */}
      <SimpleFlex setWidth='60px'>
        {leagues?.map(({ idLeague, strBadge, strLeague }) => (
          <Link
            key={idLeague}
            href='/league/[leagueName]/[leagueId]'
            as={`/league/${strLeague}/${idLeague}`}
          >
            <a className='link--tag'>
              <img className='link--tag__img' src={strBadge} alt={strLeague} />
            </a>
          </Link>
        ))}
      </SimpleFlex>
      {/* </div> */}
    </Styled>
  );
};
