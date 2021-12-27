import { Router } from 'express';
import { clientRoutes } from './client.routes';
import { citiesRouter } from './cities.routes';

const router = Router();

router.use('/client', clientRoutes);
router.use('/cities', citiesRouter);

export { router };
