import { Team } from './team';

/**
 *  @swagger
 *  components:
 *    schemas:
 *
 *      Tile:
 *        type: object
 *        properties:
 *          id:
 *            description: Unique guid to identify the tile
 *            type: string
 *          word:
 *            description: The codename on this tile
 *            type: string
 *          selected:
 *            description: Indicates whether the tile has been selected (and so is known to all players)
 *            type: boolean
 *          team:
 *            description: The team this tile belongs to
 *            $ref: '#/components/schemas/Team'
 */
export interface Tile {
  id: string;
  word: string;
  selected: boolean;
  team: Team;
}
