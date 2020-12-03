import { Router } from 'express';
import SalesController from '../controllers/salesController';

const routes = Router();

routes.get('/', SalesController.getAll);
routes.get('/weekrank', SalesController.getRanking);
routes.post('/venda', SalesController.create);
routes.get('/vendedor-vendas/:id', SalesController.getbyID);


export default routes;

