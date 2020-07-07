import EventsProps from './Events';
import { Team } from './Team';

export default interface FixterPros {
  nextEvents: EventsProps[];
  lastEvents: EventsProps[];
  teams: Team[];
  sportType: string;
}
