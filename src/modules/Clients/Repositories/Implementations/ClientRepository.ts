import { prisma } from '@config/database';
import { IClientRepository, IClient, IClientDTO } from '../IClientRepository';

export class ClientRepository implements IClientRepository {
  private repositoy = prisma.client;

  async listCLientName(name: string): Promise<IClient[]> {
    const client = await this.repositoy.findMany({
      where: { name: { search: name } },
      include: {
        city: {
          select: {
            city: true,
            state: true,
          },
        },
      },
    });
    return client;
  }

  async listCLientUsername(username: string): Promise<IClient> {
    const client = await this.repositoy.findUnique({
      where: { username },
      include: {
        city: {
          select: {
            city: true,
            state: true,
          },
        },
      },
    });
    return client;
  }

  async listClientId(id: string): Promise<IClient> {
    const client = await this.repositoy.findUnique({
      where: { id },
      include: {
        city: {
          select: {
            city: true,
            state: true,
          },
        },
      },
    });
    return client;
  }

  async createClient(client: IClientDTO): Promise<void> {
    await this.repositoy.create({ data: client });
  }

  async updateClient(name: string, id: string): Promise<void> {
    await this.repositoy.update({ where: { id }, data: { name } });
  }

  async deleteClient(id: string): Promise<void> {
    await this.repositoy.delete({ where: { id } });
  }
}
