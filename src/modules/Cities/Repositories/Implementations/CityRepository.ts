import { prisma } from '@config/database';
import { ICitieRepository, ICities, ICitiesDTO } from '../ICitiesRepository';

export class CityRepository implements ICitieRepository {
  private repositoy = prisma.city;

  async createCity(city: ICitiesDTO): Promise<void> {
    await this.repositoy.create({ data: city });
  }

  async listCitiesState(state: string): Promise<ICities[]> {
    const cities = await this.repositoy.findMany({
      where: { state: { search: state } },
    });
    return cities;
  }

  async listCity(id: string): Promise<ICities> {
    const city = await this.repositoy.findUnique({ where: { id } });
    return city;
  }
}
