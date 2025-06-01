import { FastifyRequest, FastifyReply } from "fastify";

// Criar uma Person e associar a um Thing
export const createPerson = async (
  request: FastifyRequest<{
    Body: {
      label: string;
      comment?: string;
      owlEquivalentClass?: string;
      contributorUrl?: string;
    };
  }>,
  reply: FastifyReply
) => {
  const { label, comment, owlEquivalentClass, contributorUrl } = request.body;

  try {
    const thing = await reply.server.prisma.thing.create({
      data: { label, comment },
    });

    const person = await reply.server.prisma.person.create({
      data: {
        label,
        comment,
        owlEquivalentClass,
        contributorUrl,
        thingId: thing.id,
      },
    });

    // Atualiza o Thing para vincular à Person
    await reply.server.prisma.thing.update({
      where: { id: thing.id },
      data: { person: { connect: { id: person.id } } },
    });

    reply.status(201).send(person);
  } catch (error) {
    reply.status(500).send({ error: "Erro ao criar Person" });
  }
};

// Obter todas as Persons
export const getAllPersons = async (
  _request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const things = await reply.server.prisma.thing.findMany();
    return reply.send(things);
  } catch (error) {
    return reply.status(500).send({ error: "Failed to fetch things" });
  }
};

// Obter Person por ID
export const getPersonById = async (
  request: FastifyRequest<{
    Params: { id: string };
  }>,
  reply: FastifyReply
) => {
  const { id } = request.params;
  try {
    const person = await reply.server.prisma.person.findUnique({
      where: { id: parseInt(id) },
      include: { thing: true },
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
    Params: { id: number };
    Body: {
      label: string;
      comment?: string;
      owlEquivalentClass?: string;
      contributorUrl?: string;
      thingId: number;
    };
  }>,
  reply: FastifyReply
) => {
  const { id } = request.params;
  const { label, comment, owlEquivalentClass, contributorUrl } = request.body;

  try {
    // Atualiza Thing associado
    await reply.server.prisma.thing.update({
      where: { id: request.body.thingId },
      data: { label, comment },
    });

    // Atualiza Person
    const updatedPerson = await reply.server.prisma.person.update({
      where: { id: id },
      data: { label, comment, owlEquivalentClass, contributorUrl },
    });

    reply.send(updatedPerson);
  } catch (error) {
    reply.status(500).send({ error: "Erro ao atualizar Person" });
  }
};

// Deletar Person
export const deletePerson = async (
  request: FastifyRequest<{
    Params: { id: string };
  }>,
  reply: FastifyReply
) => {
  const { id } = request.params;
  try {
    reply
      .status(204)
      .send(
        await reply.server.prisma.person.delete({ where: { id: parseInt(id) } })
      );
  } catch (error) {
    reply.status(500).send({ error: "Erro ao deletar Person" });
  }
};
