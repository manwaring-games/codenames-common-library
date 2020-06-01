import { Team } from './team';
import { Guess } from './guess';
import { Clue } from './clue';

/**
 *  @swagger
 *  components:
 *    schemas:
 *
 *      Turn:
 *        type: object
 *        properties:
 *          id:
 *            description: Unique guid to identify the turn
 *            type: string
 *          team:
 *            description: The active team this turn
 *            $ref: '#/components/schemas/Team'
 *          clue:
 *            description: The clue that was given this turn
 *            $ref: '#/components/schemas/Clue'
 *          guesses:
 *            description: Guesses that have been made so far this turn
 *            type: array
 *            items:
 *              $ref: '#/components/schemas/Guess'
 */
export interface Turn {
  id: string;
  team: Team;
  clue: Clue;
  guesses?: Guess[];
}
