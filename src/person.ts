import { Team } from './team';

export interface Person {
  id: string;
  name: string;
  team: Team.BLUE | Team.RED;
  role: Role;
}

export enum Role {
  SPY = 'spy',
  SPYMASTER = 'spymaster',
}
