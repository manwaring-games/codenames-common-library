import { Team } from './team';

/**
 *  @swagger
 *  components:
 *    schemas:
 *
 *      Clue:
 *        type: object
 *        properties:
 *          id:
 *            description: Unique guid to identify the clue
 *            type: string
 *          word:
 *            description: The single word clue
 *            type: string
 *          tiles:
 *            description: How many tiles this clue is for
 *            type: number
 */
export interface Clue {
  id: string;
  word: string;
  tiles: number;
}

/**
 *  @swagger
 *  components:
 *    schemas:
 *
 *      CreateClueRequest:
 *        type: object
 *        required:
 *          - word
 *          - tiles
 *          - team
 *        properties:
 *          word:
 *            description: The single word clue
 *            type: string
 *          tiles:
 *            description: How many tiles this clue is for
 *            type: number
 *          team:
 *            description: Which team is giving this clue
 *            $ref: '#/components/schemas/Team'
 */
export interface CreateClueRequest {
  word: string;
  tiles: number;
  team: Team;
}
