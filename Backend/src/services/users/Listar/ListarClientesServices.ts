import prismaClient from "../../../../prisma";

class ListarClientesServices {
  async execute() {
    const clientes = await prismaClient.clientes.findMany({});
    return clientes;
  }
}

export { ListarClientesServices };
