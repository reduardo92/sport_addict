import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import AlertContext from '../../components/context/alert/AlertContext';
import AuthContext from '../../components/context/auth/AuthContext';
import SportContext from '../../components/context/SportsData/SportContext';
import Badge from '../../components/ui/Badge';

interface StyledProps {
  heroBg?: boolean;
}

const Styled = styled.section<StyledProps>`
  .hero-body {
    display: flex;
    flex-direction: column;
    align-items: center;

    background-image: url();
  }
`;

interface UserProfileProps {}

const UserProfile: React.FC<UserProfileProps> = ({}) => {
  // Active Link Tab
  const [tab, setTab] = useState<string>('leagues');
  // Auth
  const {
    state: { user },
  } = useContext(AuthContext);
  // Alerts
  const { setAlert } = useContext(AlertContext);
  // SportState

  const { favorites } = useContext(SportContext);

  const { push } = useRouter();

  useEffect(() => {
    if (!user) {
      push('/');
      setAlert!('Log in/Sign up', 'warning');
    }
  }, []);

  const handleTabActive = (tabName: string) =>
    tabName === tab ? 'is-active' : '';

  console.log(favorites, 'fav');
  console.log(
    favorites.filter((item) => {
      if (tab === 'players') return item.idPlayer && item;

      if (tab === 'teams') return !item.idPlayer && item.idTeam && item;

      if (tab === 'leagues') return !item.idPlayer && !item.idTeam && item;
    })
  );
  return (
    <Styled className='userProfile hero is-info is-warning'>
      <div className='hero-body'>
        <div className='container has-text-centered'>
          <figure className='image is-128x128'>
            <img
              className='is-rounded'
              src={user?.photoURL || '/icons/noBadge.png'}
              alt='user avatar'
            />
          </figure>
          <p className='title'>{user?.displayName}</p>
          <p className='subtitle'>
            {user?.metadata.creationTime?.slice(0, -12)}
          </p>
        </div>
      </div>

      <div className='hero-foot'>
        <nav className='tabs is-boxed is-fullwidth'>
          <div className='container'>
            <ul>
              <li
                className={handleTabActive('leagues')}
                onClick={() => setTab('leagues')}
              >
                <a>Leagues</a>
              </li>
              <li
                className={handleTabActive('teams')}
                onClick={() => setTab('teams')}
              >
                <a>Teams</a>
              </li>
              <li
                className={handleTabActive('players')}
                onClick={() => setTab('players')}
              >
                <a>Players</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className='favorites'>
        <div className='container columns is-mobile'>
          {favorites
            .filter((item) => {
              if (tab === 'players') return item.idPlayer && item;
              if (tab === 'teams') return !item.idPlayer && item.idTeam && item;
              if (tab === 'leagues')
                return !item.idPlayer && !item.idTeam && item;
            })
            .map((item, i) => (
              <Badge
                key={i}
                href='/sports/[sport]/[sportName]/[id]'
                as={`/sports/${item.strSport}/${item.strLeague}/${item.idLeague}`}
                title={item.strLeague}
                src={item.strBadge || item.strTeamBadge || item.strCutout}
                clr
                setScroll
                className='column is-2'
                isFavorite={{ favItem: item, id: item.idLeague }}
              />
            ))}
        </div>
      </div>
    </Styled>
  );
};

export default UserProfile;
