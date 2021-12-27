import { container } from 'tsyringe';
import { IClientRepository } from '@modules/Clients/Repositories/IClientRepository';
import { ClientRepository } from '@modules/Clients/Repositories/Implementations/ClientRepository';
import { ICitieRepository } from '@modules/Cities/Repositories/ICitiesRepository';
import { CityRepository } from '@modules/Cities/Repositories/Implementations/CityRepository';

// Container Client
container.registerSingleton<IClientRepository>(
  'ClientRepository',
  ClientRepository,
);

// Container City
container.registerSingleton<ICitieRepository>('CityRepository', CityRepository);
