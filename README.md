## Primeiros Passos
 Incluir o arquivo .env enviado por email na pasta desafioabas
 
 Estrutura pasta:
 	>desafioabas
 		> node_modules
		 > src
		  .env
		  ...
 
 Instalando dependências:
 
`$ yarn install `

Executar a aplicação

`$ yarn server`

Agora é possível acessar ao serviço pela rota: http://localhost:3001

## Rotas [Porta - 3001]
### Ranking:  
|Tipo|Rota|Parametro|Descrição|
| -------- | -------- | -------- |-------- |
|GET|/api/weekrank||Retorna os melhores vendedores da semana|

|Retorno|
| -------- |
```javascript
{ "message": "Melhores vendedores da semana",
    "data": [
        {
            "sellerID": 12,
            "avgSales": "R$ 147,33"
        },
```
### Venda:  
|Tipo|Rota|Parametro|Descrição|
| -------- | -------- | -------- |-------- |
|POST|/api/venda|body json|Cria uma nova venda|

|Parametro body:|
|-------|
```javascript

{
    "saleDate" : Date,
    "saleValue": Number,
    "sellerID": Number
}
Ex:
{
    "saleDate" : "2020-11-30 15:00:00",
    "saleValue": 189,
    "sellerID": 1
}
```

|Retorno|
|-------|
```javascript

{
    "saleDate" : Date,
    "saleValue": Number,
    "sellerID": Number
}
Ex:
{
    "saleDate" : "2020-11-30 15:00:00",
    "saleValue": 189,
    "sellerID": 1
}
```

### Busca Venda por Vendedor:  
|Tipo|Rota|Parametro|Descrição|
| -------- | -------- | -------- |-------- |
|POST|/api/vendedor-vendas/:id|:id-> Id Vendedor|Busca todas as vendas de um vendedor|

|Retorno|
|-------|
```javascript

{
    "lenght": 2,
    "data": [
        {
            "saleDate": "2020-12-01T15:38:12.000Z",
            "_id": "5fc7d13630dfc1795cfb5daf",
            "saleValue": 57.5,
            "sellerID": 3,
            "__v": 0
        },
        ....
}
```

### Busca Vendas:  
|Tipo|Rota|Parametro|Descrição|
| -------- | -------- | -------- |-------- |
|POST|/api||Busca todas as vendas|

|Retorno|
|-------|
```javascript

{
    "length": 16,
    "data": [
        {
            "saleDate": "2020-11-30T18:00:00.000Z",
            "_id": "5fc7d10c30dfc1795cfb5dad",
            "saleValue": 189,
            "sellerID": 1,
            "__v": 0
        },
        ....
}
```
