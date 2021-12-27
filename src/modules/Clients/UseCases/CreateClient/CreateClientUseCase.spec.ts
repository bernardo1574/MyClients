import 'reflect-metadata';
import { ClientRepositoryInMemory } from '@modules/Clients/Repositories/in-memory/ClientRepositoryInMemory';
import { AppError } from '@shared/errors/AppError';
import { CreateClientUseCase } from './CreateClientUseCase';

const CREATE_CLIENT = {
  username: 'username_test',
  name: 'name_test',
  gender: 'gender_test',
  birth_date: '27-07-1998',
  age: 23,
  id_city: '1',
};

let createClientUseCase: CreateClientUseCase;
let clientRepositoryInMemory: ClientRepositoryInMemory;

describe('Create Client', () => {
  beforeEach(() => {
    clientRepositoryInMemory = new ClientRepositoryInMemory();
    createClientUseCase = new CreateClientUseCase(clientRepositoryInMemory);
  });
  it('should be able to create a new client', async () => {
    await createClientUseCase.execute(CREATE_CLIENT);
    const clientCreated = await clientRepositoryInMemory.listCLientUsername(
      CREATE_CLIENT.username,
    );
    expect(clientCreated).toHaveProperty('id');
  });

  it('should not be able to create a new client with car existis', async () => {
    await expect(async () => {
      await createClientUseCase.execute(CREATE_CLIENT);

      await createClientUseCase.execute(CREATE_CLIENT);
    }).rejects.toBeInstanceOf(AppError);
  });
});
