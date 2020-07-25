import EventsProps from '../components/interfaces/Events';
import { Team } from '../components/interfaces/Team';

export default (data: Team[], event: EventsProps) =>
  data?.filter(
    (item) =>
      item.idTeam === event.idHomeTeam || item.idTeam === event.idAwayTeam
  );
