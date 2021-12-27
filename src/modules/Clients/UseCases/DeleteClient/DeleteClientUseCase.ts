import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/errors/AppError';
import { IClientRepository } from '@modules/Clients/Repositories/IClientRepository';

interface IDeleteClient {
  id: string;
}

@injectable()
export class DeleteClientUseCase {
  constructor(
    @inject('ClientRepository')
    private clientRepository: IClientRepository,
  ) {}

  async execute({ id }: IDeleteClient): Promise<void> {
    try {
      const clientExist = await this.clientRepository.listClientId(id);
      if (!clientExist) {
        throw new Error('Client not exists!');
      }

      this.clientRepository.deleteClient(id);
    } catch (err) {
      throw new AppError(err.message);
    }
  }
}
