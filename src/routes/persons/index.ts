import { FastifyInstance } from "fastify";
import {
  createPerson,
  getAllPersons,
  getPersonById,
  updatePerson,
  deletePerson,
} from "../../controllers/person.controller";
import { z } from "zod";
import 'zod-openapi/extend';

// Define schemas with refs for components.schemas
const PersonSchema = z.object({
  label: z.string().openapi({
    description: 'Person label',
    example: 'John Doe'
  }),
  comment: z.string().nullable().optional().openapi({
    description: 'Optional comment about the person',
    example: 'Primary contact'
  }),
  owlEquivalentClass: z.string().nullable().optional().openapi({
    description: 'OWL equivalent class reference'
  }),
  contributorUrl: z.string().nullable().optional().openapi({
    description: 'URL of the contributor'
  }),
}).openapi({ ref: 'Person' });

const PersonUpdateSchema = PersonSchema.extend({
  thingId: z.number().openapi({
    description: 'Thing ID reference',
    example: 1
  }),
}).openapi({ ref: 'PersonUpdate' });

const PersonIdSchema = z.object({
  id: z.coerce.number().openapi({
    description: 'Person ID',
    example: 1
  }),
}).openapi({ ref: 'PersonId' });

const SuccessResponseSchema = z.object({
  success: z.boolean().openapi({
    description: 'Operation success status',
    example: true
  }),
}).openapi({ ref: 'SuccessResponse' });

export default async function (fastify: FastifyInstance) {
  fastify.post(
    "/",
    {
      schema: {
        operationId: 'createPerson',
        tags: ['Person'],
        description: 'Create a new person',
        body: PersonSchema,
        response: {
          201: SuccessResponseSchema
        }
      }
    },
    createPerson
  );

  fastify.get(
    "/",
    {
      schema: {
        operationId: 'getAllPersons',
        tags: ['Person'],
        description: 'Get all persons',
        response: {
          200: z.array(PersonSchema)
        }
      }
    },
    getAllPersons
  );

  fastify.get(
    "/:id",
    {
      schema: {
        operationId: 'getPersonById',
        tags: ['Person'],
        description: 'Get person by ID',
        params: PersonIdSchema,
        response: {
          200: PersonSchema
        }
      }
    },
    getPersonById
  );

  fastify.put(
    "/:id",
    {
      schema: {
        operationId: 'updatePerson',
        tags: ['Person'],
        description: 'Update a person',
        params: PersonIdSchema,
        body: PersonUpdateSchema,
        response: {
          200: PersonSchema
        }
      }
    },
    updatePerson
  );

  fastify.delete(
    "/:id",
    {
      schema: {
        operationId: 'deletePerson',
        tags: ['Person'],
        description: 'Delete a person',
        params: PersonIdSchema,
        response: {
          204: SuccessResponseSchema
        }
      }
    },
    deletePerson
  );
}