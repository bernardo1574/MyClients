import 'reflect-metadata';
import { ClientRepositoryInMemory } from '@modules/Clients/Repositories/in-memory/ClientRepositoryInMemory';
import { AppError } from '@shared/errors/AppError';
import { ListClientNameUseCase } from './ListClientNameUseCase';

let listClientNameUseCase: ListClientNameUseCase;
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

const CLIENT_EXPECTED = [
  {
    id: '9ab26abc-ac30-4a2a-b494-ea235ffc6224',
    username: 'username_test',
    name: 'name_test',
    gender: 'gender_test',
    birth_date: new Date(),
    age: 23,
    fk_id_city: '1',
  },
];

describe('List Client by Name', () => {
  beforeEach(() => {
    clientRepositoryInMemory = new ClientRepositoryInMemory();
    listClientNameUseCase = new ListClientNameUseCase(clientRepositoryInMemory);
  });
  it('should be able to list client', async () => {
    await clientRepositoryInMemory.createClient(CLIENT);
    const client = await listClientNameUseCase.execute({ name: CLIENT.name });
    expect(client).toEqual(CLIENT_EXPECTED);
  });
  it('should not be able to list a specific client with name not existis', async () => {
    await expect(async () => {
      await clientRepositoryInMemory.createClient(CLIENT);
      await listClientNameUseCase.execute({
        name: 'invalid_name',
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
