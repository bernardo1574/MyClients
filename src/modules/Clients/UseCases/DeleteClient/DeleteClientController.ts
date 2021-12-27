import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { DeleteClientUseCase } from './DeleteClientUseCase';

export class DeleteClientController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteClientUseCase = container.resolve(DeleteClientUseCase);

    await deleteClientUseCase.execute({ id });

    return response.status(200).send();
  }
}
