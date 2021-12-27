import 'reflect-metadata';
import { CitiesRepositoryInMemory } from '@modules/Cities/Repositories/in-memory/CitiesRepositoryInMemory';
import { AppError } from '@shared/errors/AppError';
import { ListCityUseCase } from './ListCityUseCase';

const CREATE_CITY = {
  id: '1',
  city: 'city_test',
  state: 'state_test',
};

let listCityUseCase: ListCityUseCase;
let citiesRepositoryInMemory: CitiesRepositoryInMemory;

describe('List City', () => {
  beforeEach(() => {
    citiesRepositoryInMemory = new CitiesRepositoryInMemory();
    listCityUseCase = new ListCityUseCase(citiesRepositoryInMemory);
  });

  it('should be able to list cities by id', async () => {
    await citiesRepositoryInMemory.createCity(CREATE_CITY);
    const cities = await listCityUseCase.execute({
      id: CREATE_CITY.id,
    });
    expect(cities).toEqual(CREATE_CITY);
  });
  it('should not be able to list cities by id', async () => {
    await expect(async () => {
      await citiesRepositoryInMemory.createCity(CREATE_CITY);
      await listCityUseCase.execute({
        id: '2',
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
