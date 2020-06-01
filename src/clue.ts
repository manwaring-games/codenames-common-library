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
 *        properties:
 *          word:
 *            description: The single word clue
 *            type: string
 *          tiles:
 *            description: How many tiles this clue is for
 *            type: number
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
