import { FastifyRequest, FastifyReply } from "fastify";

interface FinancialAssetData {
  financialProductId: number;
  monetaryAmount: {
    value: number;
    currency?: string;
  };
}

// List all financial products for a person
export const getPersonFinancialProducts = async (
  request: FastifyRequest<{
    Params: { personsId: number };
  }>,
  reply: FastifyReply
) => {
  const { personsId } = request.params;

  try {
    const person = await reply.server.prisma.person.findUnique({
      where: { id: personsId },
      include: {
        thing: {
          include: {
            intangible: {
              include: {
                structuredValue: {
                  include: {
                    monetaryAmount: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    if (!person) {
      return reply.status(404).send({ error: "Person não encontrada" });
    }

    return reply.send({
      personId: person.id,
      name: person.label,
      financialAssets: person.thing.intangible?.structuredValue?.monetaryAmount,
    });
  } catch (error) {
    console.error(error);
    return reply.status(500).send({
      error: "Erro ao buscar produtos financeiros",
    });
  }
};

// Create new financial product for person
export const createPersonFinancialProduct = async (
  request: FastifyRequest<{
    Params: { personsId: number };
    Body: FinancialAssetData;
  }>,
  reply: FastifyReply
) => {
  const { personsId } = request.params;
  const { financialProductId, monetaryAmount } = request.body;

  try {
    const [person, financialProduct] = await Promise.all([
      reply.server.prisma.person.findUnique({
        where: { id: personsId },
        include: { thing: { include: { intangible: true } } },
      }),
      reply.server.prisma.financialProduct.findUnique({
        where: { id: financialProductId },
      }),
    ]);

    if (!person || !financialProduct) {
      return reply.status(404).send({
        error: !person ? "Person não encontrada" : "Produto financeiro não encontrado",
      });
    }

    const updatedPerson = await reply.server.prisma.person.update({
      where: { id: personsId },
      data: {
        thing: {
          update: {
            intangible: {
              update: {
                structuredValue: {
                  update: {
                    monetaryAmount: {
                      create: {
                        value: monetaryAmount.value,
                        currency: monetaryAmount.currency,
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      include: {
        thing: {
          include: {
            intangible: {
              include: {
                structuredValue: {
                  include: {
                    monetaryAmount: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    return reply.status(201).send(updatedPerson);
  } catch (error) {
    console.error(error);
    return reply.status(500).send({
      error: "Erro ao criar produto financeiro",
    });
  }
};

// Get specific financial product from person
export const getPersonFinancialProductById = async (
  request: FastifyRequest<{
    Params: { personsId: number; id: number };
  }>,
  reply: FastifyReply
) => {
  const { personsId, id } = request.params;

  try {
    const person = await reply.server.prisma.person.findUnique({
      where: { id: personsId },
      include: {
        thing: {
          include: {
            intangible: {
              include: {
                structuredValue: {
                  include: {
                    monetaryAmount: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    if (!person) {
      return reply.status(404).send({ error: "Person não encontrada" });
    }

    const monetaryAmount = person.thing.intangible?.structuredValue?.monetaryAmount;
    if (!monetaryAmount || monetaryAmount.id !== id) {
      return reply.status(404).send({ error: "Produto financeiro não encontrado" });
    }

    return reply.send({
      personId: person.id,
      name: person.label,
      financialProduct: monetaryAmount,
    });
  } catch (error) {
    console.error(error);
    return reply.status(500).send({
      error: "Erro ao buscar produto financeiro específico",
    });
  }
};

// Update person's financial product
export const updatePersonFinancialProduct = async (
  request: FastifyRequest<{
    Params: { personsId: number; id: number };
    Body: {
      monetaryAmount: {
        value: number;
        currency?: string;
      };
    };
  }>,
  reply: FastifyReply
) => {
  const { personsId, id } = request.params;
  const { monetaryAmount } = request.body;

  try {
    const person = await reply.server.prisma.person.findUnique({
      where: { id: personsId },
      include: {
        thing: {
          include: {
            intangible: {
              include: {
                structuredValue: {
                  include: {
                    monetaryAmount: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    if (!person) {
      return reply.status(404).send({ error: "Person não encontrada" });
    }

    const existingMonetaryAmount = person.thing.intangible?.structuredValue?.monetaryAmount;
    if (!existingMonetaryAmount || existingMonetaryAmount.id !== id) {
      return reply.status(404).send({ error: "Produto financeiro não encontrado" });
    }

    const updatedPerson = await reply.server.prisma.person.update({
      where: { id: personsId },
      data: {
        thing: {
          update: {
            intangible: {
              update: {
                structuredValue: {
                  update: {
                    monetaryAmount: {
                      update: {
                        value: monetaryAmount.value,
                        currency: monetaryAmount.currency,
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      include: {
        thing: {
          include: {
            intangible: {
              include: {
                structuredValue: {
                  include: {
                    monetaryAmount: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    return reply.send(updatedPerson);
  } catch (error) {
    console.error(error);
    return reply.status(500).send({
      error: "Erro ao atualizar produto financeiro",
    });
  }
};

// Delete person's financial product
export const deletePersonFinancialProduct = async (
  request: FastifyRequest<{
    Params: { personsId: number; id: number };
  }>,
  reply: FastifyReply
) => {
  const { personsId, id } = request.params;

  try {
    const person = await reply.server.prisma.person.findUnique({
      where: { id: personsId },
      include: {
        thing: {
          include: {
            intangible: {
              include: {
                structuredValue: {
                  include: {
                    monetaryAmount: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    if (!person) {
      return reply.status(404).send({ error: "Person não encontrada" });
    }

    const monetaryAmount = person.thing.intangible?.structuredValue?.monetaryAmount;
    if (!monetaryAmount || monetaryAmount.id !== id) {
      return reply.status(404).send({ error: "Produto financeiro não encontrado" });
    }

    await reply.server.prisma.monetaryAmount.delete({
      where: { id },
    });

    return reply.status(204).send();
  } catch (error) {
    console.error(error);
    return reply.status(500).send({
      error: "Erro ao remover produto financeiro",
    });
  }
};