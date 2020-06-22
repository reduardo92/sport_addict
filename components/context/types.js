export const API_KEY = process.env.API_KEY;
export const SITE_URL = process.env.SITE_URL;
export const BASE_URL = 'https://www.thesportsdb.com/api/v1/json/1/';
export const IMG_URL =
  'https://www.thesportsdb.com/images/media/league/fanart/';

// DATA
export const SET_SPORT_DATA = 'SET_SPORT_DATA';
export const SET_LEAGUES_DATA = 'SET_LEAGUES_DATA';
// Set MODAL
export const SET_MODAL_IMG = 'SET_MODAL_IMG';
export const CLEAR_MODAL_IMG = 'CLEAR_MODAL_IMG';

// Alert Type
export const SET_ALERT = 'SET_ALERT';
export const REMOVE_ALERT = 'REMOVE_ALERT';
// Auth Types
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';
export const USER_LOADED = 'USER_LOADED';
export const AUTH_ERROR = 'AUTH_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGOUT = 'LOGOUT';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

// Api Routes
export const apiPoint = {
  // Search
  search: {
    team_name: `${BASE_URL}searchteams.php?t=`,
    player_name: `${BASE_URL}searchplayers.php?p=`,
    event_name: `${BASE_URL}searchevents.php?e=`,
  },
  list: {
    list_in_country: `${BASE_URL}search_all_leagues.php?c=`,
    list_seasons_in_league: `${BASE_URL}search_all_seasons.php?id=`,
    list_all_team_in_league: `${BASE_URL}search_all_teams.php?l=`,
    list_users_favorites: `${BASE_URL}searchloves.php?u=`,
  },
  lookUp: {
    lookUp_league_id: `${BASE_URL}lookupleague.php?id=`,
    lookUp_team_id: `${BASE_URL}lookupteam.php?id=`,
    lookUp_player_id: `${BASE_URL}lookupplayer.php?id=`,
    lookUp_event_id: `${BASE_URL}lookupevent.php?id=`,
    lookUp_honours_player_id: `${BASE_URL}lookuphonors.php?id=`,
    lookUp_former_team_player_id: `${BASE_URL}lookupformerteams.php?id=`,
    lookUp_contracts_player_id: `${BASE_URL}lookupcontracts.php?id=`,
    lookUp_league_table: `${BASE_URL}/lookuptable.php?l=`, // can take two params
  },
  schedules: {
    schedules_next_team: `${BASE_URL}/eventsnext.php?id=`,
    schedules_next_league: `${BASE_URL}/eventsnextleague.php?id=`,
    schedules_last_team: `${BASE_URL}/eventslast.php?id=`,
    schedules_last_league: `${BASE_URL}/eventspastleague.php?id=`,
    schedules_league_season: `${BASE_URL}/eventsseason.php?id=`, // can take two params
  },
  no_param: {
    list_sports: `${BASE_URL}all_sports.php`,
    list_leagues: `${BASE_URL}all_leagues.php`,
    list_countries: `${BASE_URL}all_countries.php`,
  },
};
