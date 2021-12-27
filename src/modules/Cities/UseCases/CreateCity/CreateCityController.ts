import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { CreateCityUseCase } from './CreateCityUseCase';

export class CreateCityController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { state, city } = request.body;

    const createCityUseCase = container.resolve(CreateCityUseCase);

    await createCityUseCase.execute({ city, state });

    return response.status(201).send();
  }
}
