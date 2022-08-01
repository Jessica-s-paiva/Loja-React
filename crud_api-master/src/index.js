import express from "express";
import { bd } from "./infra/sqlite-bd.js";
import { ClientesController } from './controllers/ClientesController.js';
import { pagamentosController } from "./controllers/PagamentosController.js";
import { compras } from './controllers/compras-controller.js';
import { produtos } from "./controllers/produtos_controller.js";
import { ProdutosDao } from "./DAO/produtos_dao.js";
import bodyParser from 'body-parser'


const app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    next();
  });

pagamentosController(app, bd)
ClientesController(app, bd)
compras(app, bd);
produtos(app, bd);


app.listen(3000, ()=>{
    console.log('Servidor rodando na porta 3000');
})


