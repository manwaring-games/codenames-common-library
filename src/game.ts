import { Person } from './person';
import { Tile } from './tile';
import { Turn } from './turn';

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
 *          activeTurn:
 *            description: Information about the active turn
 *            $ref: '#/components/schemas/Turn
 *          pastTurns:
 *            description: Information about past turns
 *            type: array
 *            items:
 *              $ref: '#/componenets/schemas/Turn'
 */
export interface Game {
  id: string;
  code: string;
  started: boolean;
  tiles?: Tile[];
  people?: Person[];
  activeTurn?: Turn;
  pastTurns?: Turn[];
}
