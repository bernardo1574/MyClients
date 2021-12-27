import { ClientInMemory } from '@modules/Clients/Models/ClientsInMemory';
import {
  IClient,
  IClientDTO,
  IClientRepository,
} from '@modules/Clients/Repositories/IClientRepository';

class ClientRepositoryInMemory implements IClientRepository {
  clients: IClient[] = [];

  async listCLientUsername(username: string): Promise<IClient> {
    const client = this.clients.find(client => client.username === username);
    return client;
  }
  async listCLientName(name: string): Promise<IClient[]> {
    const clients = this.clients.filter(client => client.name === name);
    return clients;
  }
  async listClientId(id: string): Promise<IClient> {
    return this.clients.find(client => client.id === id);
  }
  async createClient(client: IClientDTO): Promise<void> {
    const clientRepository = new ClientInMemory();
    Object.assign(clientRepository, client);
    this.clients.push(clientRepository);
  }
  async updateClient(name: string, id: string): Promise<void> {
    const clientIndex = this.clients.findIndex(client => client.id === id);
    this.clients[clientIndex].name = name;
  }
  async deleteClient(id: string): Promise<void> {
    this.clients = this.clients.filter(client => client.id !== id);
  }
}

export { ClientRepositoryInMemory };
