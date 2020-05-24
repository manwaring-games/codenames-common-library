import { Team } from './team';

export interface Tile {
  id: string;
  word: string;
  selected: boolean;
  team: Team;
}
