import { Request, Response, request, response } from 'express';
import Sales from '../models/Sales';
import { getfirstdayOfWeek } from '../helpers/dateHelper';
import formatMoney from '../helpers/formatHelper';

const create = async (request: Request, response: Response) => {
  try{
    const newSale = new Sales(request.body);
    await newSale.save();
    response.send({message: 'Venda inserida com sucesso', data: newSale});
  } catch (error){
    response.status(500).send({ message: error.message || 'Erro ao salvar venda'});
  }
}

const getRanking = async(request: Request, response: Response) => {
  try{
    const [firstDayofWeek, todayDate, today] = getfirstdayOfWeek();

    const filter = [
      {$match: { saleDate: { $gte: firstDayofWeek, $lt: todayDate}}}, // filtro de data
      {$group: {_id: "$sellerID", total: {$sum: "$saleValue"}}}, // agrupamento
      {$sort: {total: -1}}, // ordena decrescente
      {$limit: 10}
    ];
    const result = await Sales.aggregate(filter);
    // console.log(result);
    if(result.length > 0)
    {
     const data = result.map((item: any) => {
       return { sellerID: item._id, avgSales: formatMoney(item.total/Number(today)) } 
      });
      // console.log(data);
      response.send({message: "Melhores vendedores da semana",  data});
    }else{
      response.send({message: "Não houveram vendas essa semana.",  data: []})
    }
  }catch (error){
    response.status(500).send({ message: error.message || 'Erro ao buscar ranking'});
  }

}

const getbyID = async(request: Request, response: Response) => {
  const { params } = request;

  try{
    if(!params.id || !Number(params.id))
      throw new Error("É necessário informar o Id do Vendedor");

    const data = await Sales.find({sellerID: params.id});
    response.send({lenght: data.length, data});
    }catch (error){
      response.status(500).send({ message: error.message || 'Erro ao buscar dados do vendedor'});
    }
}

const getAll = async(request: Request, response: Response) => {
  try{
    const sales = await Sales.find();
    response.send({length: sales.length, data: sales});
  }catch (error){
      response.status(500).send({ message: error.message || 'Erro ao buscar dados'});
    }
}

export default { create, getRanking, getbyID, getAll};