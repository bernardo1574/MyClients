import { Router } from 'express';
import { CreateClientController } from '@modules/Clients/UseCases/CreateClient/CreateClientController';
import { ListClientIdController } from '@modules/Clients/UseCases/ListClientId/ListClientIdController';
import { ListClientNameController } from '@modules/Clients/UseCases/ListClientName/ListClientNameController';
import { UpdateClientController } from '@modules/Clients/UseCases/UpdateClient/UpdateClientController';
import { DeleteClientController } from '@modules/Clients/UseCases/DeleteClient/DeleteClientController';

const clientRoutes = Router();
const createClientControlle = new CreateClientController();
const listClientIdController = new ListClientIdController();
const listClientNameController = new ListClientNameController();
const updateClientController = new UpdateClientController();
const deleteClientController = new DeleteClientController();

clientRoutes.post('/', createClientControlle.handle);
clientRoutes.put('/:id', updateClientController.handle);
clientRoutes.delete('/:id', deleteClientController.handle);
clientRoutes.get('/:id', listClientIdController.handle);
clientRoutes.get('/name/:name', listClientNameController.handle);

export { clientRoutes };
