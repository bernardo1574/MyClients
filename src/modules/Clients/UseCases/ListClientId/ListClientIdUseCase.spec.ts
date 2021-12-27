import 'reflect-metadata';
import { ClientRepositoryInMemory } from '@modules/Clients/Repositories/in-memory/ClientRepositoryInMemory';
import { AppError } from '@shared/errors/AppError';
import { ListClientIdUseCase } from './ListClientIdUseCase';

let listClientIdUseCase: ListClientIdUseCase;
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

describe('List Client by Id', () => {
  beforeEach(() => {
    clientRepositoryInMemory = new ClientRepositoryInMemory();
    listClientIdUseCase = new ListClientIdUseCase(clientRepositoryInMemory);
  });
  it('should be able to list a specific client', async () => {
    await clientRepositoryInMemory.createClient(CLIENT);
    const client = await listClientIdUseCase.execute({ id: CLIENT.id });
    expect(client).toEqual(CLIENT);
  });
  it('should not be able to list a specific client with id not existis', async () => {
    await expect(async () => {
      await clientRepositoryInMemory.createClient(CLIENT);
      await listClientIdUseCase.execute({
        id: '5e75b723-c734-470e-9eb4-b66c8cda6d69',
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
