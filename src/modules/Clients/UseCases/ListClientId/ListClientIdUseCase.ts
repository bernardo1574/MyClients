import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/errors/AppError';
import {
  IClientRepository,
  IClient,
} from '@modules/Clients/Repositories/IClientRepository';

interface IListlItemFilter {
  id: string;
}

@injectable()
export class ListClientIdUseCase {
  constructor(
    @inject('ClientRepository')
    private clientRepository: IClientRepository,
  ) {}
  async execute({ id }: IListlItemFilter): Promise<IClient> {
    try {
      const client = await this.clientRepository.listClientId(id);

      if (!client) {
        throw new Error('Client not found');
      }

      return client;
    } catch (error) {
      throw new AppError(error.message);
    }
  }
}
