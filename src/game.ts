import { Team } from './team';
import { Person } from './person';
import { Tile } from './tile';

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
 *          turn:
 *            description: Which team's turn it is to give clues and make guesses
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
 */
export interface Game {
  id: string;
  code: string;
  started: boolean;
  turn: Team.BLUE | Team.RED;
  tiles?: Tile[];
  people?: Person[];
}
