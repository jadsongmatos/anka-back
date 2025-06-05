import { FastifyInstance } from "fastify";
import {
  createPerson,
  getAllPersons,
  getPersonById,
  updatePerson,
  deletePerson,
} from "../../controllers/person.controller";
import {
  PersonSchema,
  PersonUpdateSchema,
  PersonIdSchema,
  SuccessResponseSchema
} from "../../types/person.types";
import z from "zod";

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