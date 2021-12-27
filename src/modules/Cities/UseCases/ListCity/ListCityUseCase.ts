import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/errors/AppError';
import {
  ICities,
  ICitieRepository,
} from '@modules/Cities/Repositories/ICitiesRepository';

interface IRequest {
  id: string;
}

@injectable()
export class ListCityUseCase {
  constructor(
    @inject('CityRepository')
    private cityRepository: ICitieRepository,
  ) {}

  async execute({ id }: IRequest): Promise<ICities> {
    try {
      if (!id) {
        throw new Error('id is required');
      }
      const city = await this.cityRepository.listCity(id);

      if (!city) {
        throw new Error('City not found');
      }
      return city;
    } catch (error) {
      throw new AppError(error.message);
    }
  }
}
