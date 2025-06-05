import { FastifyRequest, FastifyReply } from "fastify";
import { Person, PersonUpdate, PersonId } from "../types/person.types";

export const createPerson = async (
  request: FastifyRequest<{
    Body: Person;
  }>,
  reply: FastifyReply
) => {
  const {
    label,
    comment,
    contact,
    status,
  } = request.body;

  try {
    const thing = await reply.server.prisma.thing.create({
      data: {
        label,
        comment,
        person: {
          create: {
            label,
            comment,
          },
        },
        intangible: {
          create: {
            statusEnumeration: status
              ? {
                  create: {
                    label: status.label,
                    comment: status.comment,
                  },
                }
              : undefined,
            structuredValue: {
              create: {
                contactPoint: contact
                  ? {
                      create: {
                        label: contact.label,
                        comment: contact.comment,
                        email: contact.email,
                        telephone: contact.telephone,
                      },
                    }
                  : undefined,
              },
            },
          },
        },
      },
      include: {
        person: true,
        intangible: {
          include: {
            statusEnumeration: true,
            structuredValue: {
              include: {
                contactPoint: true,
                monetaryAmount: true,
              },
            },
          },
        },
      },
    });

    reply.status(201).send(thing);
  } catch (error) {
    console.error(error);
    reply
      .status(500)
      .send({ error: "Erro ao criar Person com informações monetárias" });
  }
};

// Obter todas as Persons
export const getAllPersons = async (
  _request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const persons = await reply.server.prisma.person.findMany({
      include: {
        thing: {
          include: {
            intangible: {
              include: {
                statusEnumeration: true,
                structuredValue: {
                  include: {
                    contactPoint: true,
                    monetaryAmount: true,
                  },
                },
              },
            },
          },
        },
      },
    });
    return reply.send(persons);
  } catch (error) {
    return reply.status(500).send({ error: "Erro ao buscar Persons" });
  }
};

// Obter Person por ID
export const getPersonById = async (
  request: FastifyRequest<{
    Params: { id: number };
  }>,
  reply: FastifyReply
) => {
  const { id } = request.params;
  try {
    const person = await reply.server.prisma.person.findUnique({
      where: { id: id },
      include: {
        thing: {
          include: {
            intangible: {
              include: {
                statusEnumeration: true,
                structuredValue: {
                  include: {
                    contactPoint: true,
                    monetaryAmount: true,
                  },
                },
              },
            },
          },
        },
      },
    });
    if (!person)
      return reply.status(404).send({ error: "Person não encontrada" });
    reply.send(person);
  } catch (error) {
    reply.status(500).send({ error: "Erro ao buscar Person" });
  }
};

// Atualizar Person
export const updatePerson = async (
  request: FastifyRequest<{
    Params: PersonId;
    Body: PersonUpdate;
  }>,
  reply: FastifyReply
) => {
  const { id } = request.params;
  const { label, comment, contact, status, thingId } = request.body;

  try {
    const updatedPerson = await reply.server.prisma.$transaction(async (prisma) => {
      // Update Thing and its relationships
      await prisma.thing.update({
        where: { id: thingId },
        data: {
          label,
          comment,
          intangible: {
            update: {
              statusEnumeration: status ? {
                upsert: {
                  create: {
                    label: status.label,
                    comment: status.comment,
                  },
                  update: {
                    label: status.label,
                    comment: status.comment,
                  },
                },
              } : undefined,
              structuredValue: {
                update: {
                  contactPoint: contact ? {
                    upsert: {
                      create: {
                        label: contact.label,
                        comment: contact.comment,
                        email: contact.email,
                        telephone: contact.telephone,
                      },
                      update: {
                        label: contact.label,
                        comment: contact.comment,
                        email: contact.email,
                        telephone: contact.telephone,
                      },
                    },
                  } : undefined,
                },
              },
            },
          },
        },
      });

      // Update Person
      const updatedPerson = await prisma.person.update({
        where: { id },
        data: {
          label,
          comment,
        },
        include: {
          thing: {
            include: {
              intangible: {
                include: {
                  statusEnumeration: true,
                  structuredValue: {
                    include: {
                      contactPoint: true,
                      monetaryAmount: true,
                    },
                  },
                },
              },
            },
          },
        },
      });

      return updatedPerson;
    });

    reply.send(updatedPerson);
  } catch (error) {
    console.error(error);
    reply.status(500).send({ error: "Erro ao atualizar Person e seus relacionamentos" });
  }
};

// Deletar Person
export const deletePerson = async (
  request: FastifyRequest<{
    Params: { id: number };
  }>,
  reply: FastifyReply
) => {
  const { id } = request.params;

  try {
    const person = await reply.server.prisma.person.findUnique({
      where: { id: id },
      include: {
        thing: {
          include: {
            intangible: true
          }
        }
      }
    });

    if (!person) {
      return reply.status(404).send({ error: "Person não encontrada" });
    }

    // Update the status to "Deleted"
    const transaction = await reply.server.prisma.$transaction(async (prisma) => {
      const intangibleId = person.thing.intangible?.id;

      if (intangibleId) {
        await prisma.statusEnumeration.upsert({
          where: {
            intangibleId: intangibleId
          },
          create: {
            label: "Deleted",
            intangibleId: intangibleId
          },
          update: {
            label: "Deleted",
          }
        });
      }
    });

    reply.send(transaction);
  } catch (error) {
    console.error(error);
    reply.status(500).send({ error: "Erro ao marcar Person como deletada" });
  }
};