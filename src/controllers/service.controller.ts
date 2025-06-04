import { FastifyRequest, FastifyReply } from "fastify";

export const createService = async (
  request: FastifyRequest<{
    Body: {
      label: string;
      comment?: string;
      financialProduct: {
        label: string;
        interestRate: number;
      };
      status?: {
        label: string;
        comment?: string;
      };
    };
  }>,
  reply: FastifyReply
) => {
  const { label, comment, financialProduct, status } = request.body;

  try {
    const thing = await reply.server.prisma.thing.create({
      data: {
        label,
        comment,
        intangible: {
          create: {
            service: {
              create: {
                financialProduct: {
                  create: {
                    label: financialProduct.label,
                    interestRate: financialProduct.interestRate,
                  },
                },
              },
            },
            statusEnumeration: status
              ? {
                  create: {
                    label: status.label,
                    comment: status.comment,
                  },
                }
              : undefined,
          },
        },
      },
      include: {
        intangible: {
          include: {
            service: {
              include: {
                financialProduct: true,
              },
            },
            statusEnumeration: true,
          },
        },
      },
    });

    reply.status(201).send(thing);
  } catch (error) {
    console.error(error);
    reply.status(500).send({ error: "Erro ao criar Serviço Financeiro" });
  }
};

export const getAllServices = async (
  _request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const services = await reply.server.prisma.service.findMany({
      include: {
        financialProduct: true,
        intangible: {
          include: {
            statusEnumeration: true,
          },
        },
      },
    });
    return reply.send(services);
  } catch (error) {
    return reply.status(500).send({ error: "Erro ao buscar Serviços" });
  }
};

export const getServiceById = async (
  request: FastifyRequest<{
    Params: { id: number };
  }>,
  reply: FastifyReply
) => {
  const { id } = request.params;
  try {
    const service = await reply.server.prisma.service.findUnique({
      where: { id },
      include: {
        financialProduct: true,
        intangible: {
          include: {
            statusEnumeration: true,
          },
        },
      },
    });
    if (!service)
      return reply.status(404).send({ error: "Serviço não encontrado" });
    reply.send(service);
  } catch (error) {
    reply.status(500).send({ error: "Erro ao buscar Serviço" });
  }
};

export const updateService = async (
  request: FastifyRequest<{
    Params: { id: number };
    Body: {
      label: string;
      comment?: string;
      financialProduct: {
        label: string;
        interestRate: number;
      };
      status?: {
        label: string;
        comment?: string;
      };
      intangibleId: number;
    };
  }>,
  reply: FastifyReply
) => {
  const { id } = request.params;
  const { financialProduct, status, intangibleId } = request.body;

  try {
    const updatedService = await reply.server.prisma.$transaction(async (prisma) => {
      const service = await prisma.service.update({
        where: { id },
        data: {
          financialProduct: {
            update: {
              label: financialProduct.label,
              interestRate: financialProduct.interestRate,
            },
          },
          intangible: {
            update: {
              where: { id: intangibleId },
              data: {
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
              },
            },
          },
        },
        include: {
          financialProduct: true,
          intangible: {
            include: {
              statusEnumeration: true,
            },
          },
        },
      });

      return service;
    });

    reply.send(updatedService);
  } catch (error) {
    console.error(error);
    reply.status(500).send({ error: "Erro ao atualizar Serviço" });
  }
};

export const deleteService = async (
  request: FastifyRequest<{
    Params: { id: number };
  }>,
  reply: FastifyReply
) => {
  const { id } = request.params;

  try {
    const service = await reply.server.prisma.service.findUnique({
      where: { id },
      include: {
        intangible: true,
      },
    });

    if (!service) {
      return reply.status(404).send({ error: "Serviço não encontrado" });
    }

    const transaction = await reply.server.prisma.$transaction(async (prisma) => {
      const intangibleId = service.intangibleId;

      await prisma.statusEnumeration.upsert({
        where: {
          intangibleId: intangibleId,
        },
        create: {
          label: "Deleted",
          intangibleId: intangibleId,
        },
        update: {
          label: "Deleted",
        },
      });
    });

    reply.send(transaction);
  } catch (error) {
    console.error(error);
    reply.status(500).send({ error: "Erro ao marcar Serviço como deletado" });
  }
};