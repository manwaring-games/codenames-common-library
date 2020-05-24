import { Team } from './team';
import { Person } from './person';
import { Tile } from './tile';

export interface Game {
  id: string;
  code: string;
  started: boolean;
  turn: Team.BLUE | Team.RED;
  tiles?: Tile[];
  people?: Person[];
}
