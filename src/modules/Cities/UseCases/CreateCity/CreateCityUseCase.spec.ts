import 'reflect-metadata';
import { CitiesRepositoryInMemory } from '@modules/Cities/Repositories/in-memory/CitiesRepositoryInMemory';
import { CreateCityUseCase } from './CreateCityUseCase';

const CREATE_CITY = {
  city: 'city_test',
  state: 'state_test',
};

let createCityUseCase: CreateCityUseCase;
let citiesRepositoryInMemory: CitiesRepositoryInMemory;

describe('Create City', () => {
  beforeEach(() => {
    citiesRepositoryInMemory = new CitiesRepositoryInMemory();
    createCityUseCase = new CreateCityUseCase(citiesRepositoryInMemory);
  });

  it('should be able to create a new city', async () => {
    await createCityUseCase.execute(CREATE_CITY);
    const cityCreated = await citiesRepositoryInMemory.listCitiesState(
      CREATE_CITY.state,
    );
    expect(cityCreated[0]).toHaveProperty('id');
  });
});
