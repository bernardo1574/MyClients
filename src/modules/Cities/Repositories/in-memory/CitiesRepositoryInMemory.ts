import { CityInMemory } from '@modules/Cities/Models/CityInMemory';
import {
  ICitieRepository,
  ICities,
  ICitiesDTO,
} from '@modules/Cities/Repositories/ICitiesRepository';

class CitiesRepositoryInMemory implements ICitieRepository {
  cities: ICities[] = [];

  async createCity(city: ICitiesDTO): Promise<void> {
    const cityRepository = new CityInMemory();
    Object.assign(cityRepository, city);
    this.cities.push(cityRepository);
  }

  async listCitiesState(state: string): Promise<ICities[]> {
    return this.cities.filter(city => city.state === state);
  }

  async listCity(id: string): Promise<ICities> {
    return this.cities.find(city => city.id === id);
  }
}

export { CitiesRepositoryInMemory };
