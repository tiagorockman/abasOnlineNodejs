import express, { Response } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import routes from './routes/salesRouter';

dotenv.config();
const {USER_DB, USER_PWD} = process.env;

(async () => {
  try{
    console.log("Conectando ao MongoDB...");
    await mongoose.connect(
      `mongodb+srv://${USER_DB}:${USER_PWD}@cluster0.cxqt7.mongodb.net/abasOnline?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Conectado ao Mongo.")
  } catch (error){
    console.log("Erro ao conectar no MongoDB." + error);
  }
})();

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api', routes);

app.get('/', (_, response: Response)=> {
  response.send({ message: 'Api em execução'});
})



app.listen(3001, () => { 
   console.log("Rodando na porta 3001...");
});