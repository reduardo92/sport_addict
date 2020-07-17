import { createContext } from 'react';
import { AllSports } from '../../interfaces/AllSports';
import { Leagues } from '../../interfaces/legues';
import { Sport } from '../../interfaces/Sport';
import { Team } from '../../interfaces/Team';

export const sportInitalState: SportStateProps = {
  total_pages: null,
  allSports: null,
  leagues: null,
  modalImg: { isActive: false, src: '' },
  favorites: [],
};

export interface SportStateProps {
  total_pages: number | null;
  allSports: AllSports[] | null;
  leagues: Leagues[] | null;
  modalImg: { isActive: boolean; src: string };
  favorites: Team[] & Sport[];
  clearData?: (type: string) => void;
  setData?: (type: string, data: any) => any;
  setModalImg?: (src: string) => void;
  addFavorite?: (obj: Sport | Team) => void;
  removeFavorite?: (id: string) => void;
}

const SportContext = createContext<SportStateProps>(sportInitalState);

export default SportContext;
