import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { UpdateClientUseCase } from './UpdateClientUseCase';

export class UpdateClientController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;
    const { id } = request.params;

    const updateClientUseCase = container.resolve(UpdateClientUseCase);

    await updateClientUseCase.execute({ id, name });

    return response.status(200).send();
  }
}
