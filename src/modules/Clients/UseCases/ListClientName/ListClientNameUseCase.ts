import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/errors/AppError';
import {
  IClientRepository,
  IClient,
} from '@modules/Clients/Repositories/IClientRepository';

interface IListlItemFilter {
  name: string;
}

@injectable()
export class ListClientNameUseCase {
  constructor(
    @inject('ClientRepository')
    private clientRepository: IClientRepository,
  ) {}
  async execute({ name }: IListlItemFilter): Promise<IClient[]> {
    try {
      if (!name) {
        throw new Error('name is required');
      }

      const client = await this.clientRepository.listCLientName(name);

      if (client.length === 0) {
        throw new Error('Client not found');
      }

      return client;
    } catch (error) {
      throw new AppError(error.message);
    }
  }
}
