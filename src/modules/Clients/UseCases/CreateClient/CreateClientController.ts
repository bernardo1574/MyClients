import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { CreateClientUseCase } from './CreateClientUseCase';

export class CreateClientController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { username, name, gender, birth_date, age, id_city } = request.body;

    const createClientUseCase = container.resolve(CreateClientUseCase);
    await createClientUseCase.execute({
      username,
      name,
      gender,
      birth_date,
      age,
      id_city,
    });

    return response.status(201).send();
  }
}
