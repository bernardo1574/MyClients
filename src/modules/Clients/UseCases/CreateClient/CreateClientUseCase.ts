import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/errors/AppError';
import { IClientRepository } from '@modules/Clients/Repositories/IClientRepository';

interface ICreateClient {
  username: string;
  name: string;
  gender: string;
  birth_date: string;
  age: number;
  id_city: string;
}

@injectable()
export class CreateClientUseCase {
  constructor(
    @inject('ClientRepository')
    private clientRepository: IClientRepository,
  ) {}
  async execute(client: ICreateClient): Promise<void> {
    try {
      const clientExist = await this.clientRepository.listCLientUsername(
        client.username,
      );
      if (clientExist) {
        throw new Error('Client already exist');
      }

      this.clientRepository.createClient({
        username: client.username,
        name: client.name,
        age: client.age,
        birth_date: new Date(client.birth_date),
        fk_id_city: client.id_city,
        gender: client.gender,
      });
    } catch (err) {
      throw new AppError(err.message);
    }
  }
}
