/**
 *  @swagger
 *  components:
 *    schemas:
 *
 *      Guess:
 *        type: object
 *        properties:
 *          id:
 *            description: Unique guid to identify the guess
 *            type: string
 *          tileId:
 *            description: ID of the tile being guessed
 *            type: string
 */
export interface Guess {
  id: string;
  tileId: string;
}
