import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListClientNameUseCase } from './ListClientNameUseCase';

export class ListClientNameController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.params;
    const listClientUseCase = container.resolve(ListClientNameUseCase);
    const client = await listClientUseCase.execute({ name });
    return response.json(client);
  }
}
