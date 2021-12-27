import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/errors/AppError';
import { ICitieRepository } from '@modules/Cities/Repositories/ICitiesRepository';

interface IRequest {
  city: string;
  state: string;
}
@injectable()
export class CreateCityUseCase {
  constructor(
    @inject('CityRepository')
    private cityRepository: ICitieRepository,
  ) {}
  async execute({ city, state }: IRequest): Promise<void> {
    try {
      this.cityRepository.createCity({ city, state });
    } catch (error) {
      throw new AppError(error.message);
    }
  }
}
