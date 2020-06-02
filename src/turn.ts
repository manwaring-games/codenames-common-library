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
 *          turn:
 *            description: Whether or not this is the active turn
 *            type: boolean
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
  active: boolean;
  team: Team;
  clue?: Clue;
  guesses?: Guess[];
}

/**
 *  @swagger
 *  components:
 *    schemas:
 *
 *      Turns:
 *        type: object
 *        properties:
 *          active:
 *            description: Information about the active turn
 *            $ref: '#/components/schemas/Turn'
 *          past:
 *            description: Information about past turns
 *            type: array
 *            items:
 *              $ref: '#/components/schemas/Turn'
 */
export interface Turns {
  active?: Turn;
  past?: Turn[];
}
