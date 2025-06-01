import { FastifyInstance } from "fastify";
import {
  createPerson,
  getAllPersons,
  getPersonById,
  updatePerson,
  deletePerson,
} from "../../controllers/person.controller";

import { z } from "zod";

export default async function (fastify: FastifyInstance) {
  // Criar Person
  fastify.post(
    "/persons",
    {
      schema: {
        body: z.object({
          label: z.string(),
          comment: z.string().nullable().optional(),
          owlEquivalentClass: z.string().nullable().optional(),
          contributorUrl: z.string().nullable().optional(),
        }),
      },
    },
    createPerson
  );

  // Listar todas Persons
  fastify.get("/persons", getAllPersons);

  // Buscar Person por ID
  fastify.get(
    "/persons/:id",
    {
      schema: {
        params: z.object({
          id: z.coerce.number(),
        }),
      },
    },
    getPersonById
  );

  // Atualizar Person
  fastify.put(
    "/persons/:id",
    {
      schema: {
        params: z.object({
          id: z.coerce.number(),
        }),
        body: z.object({
          label: z.string(),
          comment: z.string().nullable().optional(),
          owlEquivalentClass: z.string().nullable().optional(),
          contributorUrl: z.string().nullable().optional(),
          thingId: z.number(),
        }),
      },
    },
    updatePerson
  );

  // Deletar Person
  fastify.delete(
    "/persons/:id",
    {
      schema: {
        params: z.object({
          id: z.coerce.number(),
        }),
      },
    },
    deletePerson
  );
}
