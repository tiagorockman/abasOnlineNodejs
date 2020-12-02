import { Request, Response, request, response } from 'express';
import Sales from '../models/Sales';

const create = async (request: Request, response: Response) => {
  try{
    const newSale = new Sales(request.body);
    await newSale.save();
    response.send({message: 'Venda inserida com sucesso', data: newSale});
  } catch (error){
    response.status(500).send({ message: error.message || 'Erro ao salvar venda'});
  }
}

const show = async(request: Request, response: Response) => {
  response.send({message: "Chegou aqui"});
}

export default { create, show };