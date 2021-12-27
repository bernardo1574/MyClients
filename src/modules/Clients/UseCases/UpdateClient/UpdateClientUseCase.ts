import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/errors/AppError';
import { IClientRepository } from '@modules/Clients/Repositories/IClientRepository';

interface IUpdateClient {
  name: string;
  id: string;
}

@injectable()
export class UpdateClientUseCase {
  constructor(
    @inject('ClientRepository')
    private clientRepository: IClientRepository,
  ) {}

  async execute({ id, name }: IUpdateClient): Promise<void> {
    try {
      const clientExist = await this.clientRepository.listClientId(id);
      if (!clientExist) {
        throw new Error('Client not exists!');
      }

      this.clientRepository.updateClient(name, id);
    } catch (err) {
      throw new AppError(err.message);
    }
  }
}
