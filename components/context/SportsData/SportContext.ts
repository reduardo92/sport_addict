import { createContext } from 'react';
import { AllSports } from '../../interfaces/AllSports';
import EventsProps from '../../interfaces/Events';
import { Leagues } from '../../interfaces/legues';
import { PlayerProps } from '../../interfaces/PlayerProps';
import { Sport } from '../../interfaces/Sport';
import { Team } from '../../interfaces/Team';
import { SearchForm } from './../../interfaces/SearchForm';

export const sportInitalState: SportStateProps = {
  total_pages: null,
  allSports: null,
  leagues: null,
  modalImg: { isActive: false, src: '' },
  favorites: [],
  searchData: null,
  searchFrom: { search: '', option: 'team' },
};

export interface SportStateProps {
  total_pages: number | null;
  allSports: AllSports[] | null;
  leagues: Leagues[] | null;
  modalImg: { isActive: boolean; src: string };
  favorites: Team[] & Sport[];
  searchData: null | searchProps[];
  searchFrom: SearchForm;
  clearData?: (type: string) => void;
  setData?: (type: string, data: any) => any;
  setModalImg?: (src: string) => void;
  addFavorite?: (obj: Sport | Team | Leagues) => void;
  removeFavorite?: (id: string) => void;
  getFavorites?: () => void;
  getSearchData?: (search: string, option: string) => void;
  handleSearchForm?: (name: string, value: string) => void;
}

const SportContext = createContext<SportStateProps>(sportInitalState);

export default SportContext;

interface searchProps extends Team, PlayerProps, EventsProps {}
