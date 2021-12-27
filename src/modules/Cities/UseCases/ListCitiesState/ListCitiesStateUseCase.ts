import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/errors/AppError';
import {
  ICities,
  ICitieRepository,
} from '@modules/Cities/Repositories/ICitiesRepository';

interface IRequest {
  state: string;
}

@injectable()
export class ListCitiesStateUseCase {
  constructor(
    @inject('CityRepository')
    private cityRepository: ICitieRepository,
  ) {}

  async execute({ state }: IRequest): Promise<ICities[]> {
    try {
      const cities = await this.cityRepository.listCitiesState(state);
      if (cities.length === 0) {
        throw new Error('Cities not found');
      }
      return cities;
    } catch (error) {
      throw new AppError(error.message);
    }
  }
}
