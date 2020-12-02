import { Router } from 'express';
import SalesController from '../controllers/salesController';
import salesController from '../controllers/salesController';

const routes = Router();

routes.get('/api/teste', salesController.show);
routes.post('/api/venda', SalesController.create);

export default routes;

