import EventsProps from '../interfaces/Events';
import { Team } from '../interfaces/Team';

export default (data: Team[], event: EventsProps) =>
  data?.filter(
    (item) =>
      item.idTeam === event.idHomeTeam || item.idTeam === event.idAwayTeam
  );
