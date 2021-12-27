import Router from 'express';
import { CreateCityController } from '@modules/Cities/UseCases/CreateCity/CreateCityController';
import { ListCitiesStateController } from '@modules/Cities/UseCases/ListCitiesState/ListCitiesStateController';
import { ListCityController } from '@modules/Cities/UseCases/ListCity/ListCityController';

const citiesRouter = Router();
const createCityController = new CreateCityController();
const listCitiesStateController = new ListCitiesStateController();
const listCityController = new ListCityController();

citiesRouter.post('/', createCityController.handle);
citiesRouter.get('/state/:state', listCitiesStateController.handle);
citiesRouter.get('/:id', listCityController.handle);

export { citiesRouter };
