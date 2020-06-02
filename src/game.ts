import { Person } from './person';
import { Tile } from './tile';
import { Turns } from './turn';
import { Team } from './team';

/**
 *  @swagger
 *  components:
 *    schemas:
 *
 *      Game:
 *        type: object
 *        properties:
 *          id:
 *            description: Unique guid to identify the game
 *            type: string
 *          code:
 *            description: This game's code, can be used by others to join
 *            type: string
 *          started:
 *            description: Indicates whether the game has started or not
 *            type: boolean
 *          startTeam:
 *            description: Indicates which team started the game
 *            $ref: '#/components/schemas/Team'
 *          tiles:
 *            description: The tiles that players will provide clues and guesses for
 *            type: array
 *            items:
 *              $ref: '#/components/schemas/Tile'
 *          people:
 *            description: The people that are playing this game
 *            type: array
 *            items:
 *              $ref: '#/components/schemas/Person'
 *          turns:
 *            description: Active and past turns
 *            $ref: '#/components/schemas/Turns'
 */
export interface Game {
  id: string;
  code: string;
  started: boolean;
  startTeam: Team;
  tiles?: Tile[];
  people?: Person[];
  turns?: Turns;
}
