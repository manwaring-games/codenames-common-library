import { Team } from './team';

/**
 *  @swagger
 *  components:
 *    schemas:
 *
 *      CreatePersonRequest:
 *        type: object
 *        required:
 *          - name
 *        properties:
 *          name:
 *            description: This person's (code)name
 *            type: string
 *
 *      Person:
 *        type: object
 *        properties:
 *          id:
 *            description: Unique guid to identify the person
 *            type: string
 *          name:
 *            description: This person's (code)name
 *            type: string
 *          role:
 *            description: This person's role
 *            $ref: '#/components/schemas/Role'
 *          team:
 *            description: The team this person belongs to
 *            $ref: '#/components/schemas/Team'
 */
export interface Person {
  id: string;
  name: string;
  team: Team.BLUE | Team.RED;
  role: Role;
}

/**
 *  @swagger
 *  components:
 *    schemas:
 *      Role:
 *        type: object
 *        enum:
 *          - SPYMASTER
 *          - SPY
 */
export enum Role {
  SPY = 'spy',
  SPYMASTER = 'spymaster',
}
