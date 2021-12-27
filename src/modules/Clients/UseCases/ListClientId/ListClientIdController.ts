import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListClientIdUseCase } from './ListClientIdUseCase';

export class ListClientIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const listClientUseCase = container.resolve(ListClientIdUseCase);
    const client = await listClientUseCase.execute({ id });
    return response.json(client);
  }
}
