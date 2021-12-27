import 'reflect-metadata';
import { CitiesRepositoryInMemory } from '@modules/Cities/Repositories/in-memory/CitiesRepositoryInMemory';
import { AppError } from '@shared/errors/AppError';
import { ListCitiesStateUseCase } from './ListCitiesStateUseCase';

const CREATE_CITY = [
  {
    id: '1',
    city: 'city_test',
    state: 'state_test',
  },
  {
    id: '2',
    city: 'city_test1',
    state: 'state_test',
  },
  {
    id: '3',
    city: 'city_test2',
    state: 'state_test1',
  },
];

const CREATE_EXPECTED = [
  {
    id: '1',
    city: 'city_test',
    state: 'state_test',
  },
  {
    id: '2',
    city: 'city_test1',
    state: 'state_test',
  },
];

let listCitiesStateUseCase: ListCitiesStateUseCase;
let citiesRepositoryInMemory: CitiesRepositoryInMemory;

describe('List Cities by State', () => {
  beforeEach(() => {
    citiesRepositoryInMemory = new CitiesRepositoryInMemory();
    listCitiesStateUseCase = new ListCitiesStateUseCase(
      citiesRepositoryInMemory,
    );
  });

  it('should be able to list cities by state', async () => {
    await Promise.all(
      CREATE_CITY.map(city => citiesRepositoryInMemory.createCity(city)),
    );
    const cities = await listCitiesStateUseCase.execute({
      state: 'state_test',
    });
    expect(cities).toEqual(CREATE_EXPECTED);
  });

  it('should not be able to list cities by state', async () => {
    await expect(async () => {
      await citiesRepositoryInMemory.createCity(CREATE_CITY[0]);

      await listCitiesStateUseCase.execute({
        state: 'state_test1',
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
