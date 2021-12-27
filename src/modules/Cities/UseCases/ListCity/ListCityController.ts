import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { ListCityUseCase } from './ListCityUseCase';

export class ListCityController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const listCityUseCase = container.resolve(ListCityUseCase);

    const city = await listCityUseCase.execute({ id });

    return response.json(city);
  }
}
