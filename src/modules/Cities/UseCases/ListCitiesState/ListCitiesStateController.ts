import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { ListCitiesStateUseCase } from './ListCitiesStateUseCase';

export class ListCitiesStateController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { state } = request.params;

    const listCitiesStateUseCase = container.resolve(ListCitiesStateUseCase);

    const cities = await listCitiesStateUseCase.execute({ state });

    return response.json(cities);
  }
}
