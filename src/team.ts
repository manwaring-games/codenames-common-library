/**
 *  @swagger
 *  components:
 *    schemas:
 *
 *      Team:
 *        type: object
 *        enum:
 *          - RED
 *          - BLUE
 *          - NEUTRAL
 *          - ASSASSIN
 */
export enum Team {
  RED = 'red',
  BLUE = 'blue',
  NEUTRAL = 'neutral',
  ASSASSIN = 'assassin',
}
