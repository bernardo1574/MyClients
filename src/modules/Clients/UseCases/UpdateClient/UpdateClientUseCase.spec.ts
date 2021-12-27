import 'reflect-metadata';
import { ClientRepositoryInMemory } from '@modules/Clients/Repositories/in-memory/ClientRepositoryInMemory';
import { AppError } from '@shared/errors/AppError';
import { UpdateClientUseCase } from './UpdateClientUseCase';

let updateClientUseCase: UpdateClientUseCase;
let clientRepositoryInMemory: ClientRepositoryInMemory;

const CLIENT_INITIAL = {
  id: '9ab26abc-ac30-4a2a-b494-ea235ffc6224',
  username: 'username_test',
  name: 'name_test',
  gender: 'gender_test',
  birth_date: new Date(),
  age: 23,
  fk_id_city: '1',
};

const CLIENT_EXPECTED = {
  id: '9ab26abc-ac30-4a2a-b494-ea235ffc6224',
  username: 'username_test',
  name: 'NAME_UPDATED',
  gender: 'gender_test',
  birth_date: new Date(),
  age: 23,
  fk_id_city: '1',
};

describe('Update CLient', () => {
  beforeEach(() => {
    clientRepositoryInMemory = new ClientRepositoryInMemory();
    updateClientUseCase = new UpdateClientUseCase(clientRepositoryInMemory);
  });

  it('should be able to update a specific client', async () => {
    await clientRepositoryInMemory.createClient(CLIENT_INITIAL);
    await updateClientUseCase.execute({
      id: CLIENT_EXPECTED.id,
      name: CLIENT_EXPECTED.name,
    });
    const client = await clientRepositoryInMemory.listClientId(
      CLIENT_EXPECTED.id,
    );
    expect(client).toEqual(CLIENT_EXPECTED);
  });

  it('should not be able to update specify client with client not found', async () => {
    await expect(async () => {
      await clientRepositoryInMemory.createClient(CLIENT_INITIAL);
      await updateClientUseCase.execute({
        id: 'invalid_id',
        name: CLIENT_EXPECTED.name,
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
