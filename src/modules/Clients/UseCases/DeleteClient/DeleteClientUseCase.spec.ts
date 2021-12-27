import 'reflect-metadata';
import { ClientRepositoryInMemory } from '@modules/Clients/Repositories/in-memory/ClientRepositoryInMemory';
import { AppError } from '@shared/errors/AppError';
import { DeleteClientUseCase } from './DeleteClientUseCase';

let deleteClientUseCase: DeleteClientUseCase;
let clientRepositoryInMemory: ClientRepositoryInMemory;

const CLIENT = {
  id: '9ab26abc-ac30-4a2a-b494-ea235ffc6224',
  username: 'username_test',
  name: 'name_test',
  gender: 'gender_test',
  birth_date: new Date(),
  age: 23,
  fk_id_city: '1',
};

describe('Delete Client', () => {
  beforeEach(() => {
    clientRepositoryInMemory = new ClientRepositoryInMemory();
    deleteClientUseCase = new DeleteClientUseCase(clientRepositoryInMemory);
  });

  it('should be able to delete a client', async () => {
    await clientRepositoryInMemory.createClient(CLIENT);
    await deleteClientUseCase.execute({ id: CLIENT.id });
    const clientVerify = await clientRepositoryInMemory.listClientId(CLIENT.id);
    expect(clientVerify).toBeUndefined();
  });

  it('should not be able to delete a client with id not existis', async () => {
    await expect(async () => {
      await clientRepositoryInMemory.createClient(CLIENT);
      await deleteClientUseCase.execute({
        id: '5e75b723-c734-470e-9eb4-b66c8cda6d69',
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
