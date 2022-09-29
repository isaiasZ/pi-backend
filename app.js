var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

var indexRouter = require('./routes/index');
var routerAlugue = require('./routes/alugueRouter');
var routerEstoque = require('./routes/estoqueRouter');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/locadora-de-carros', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/', indexRouter);
app.use('/alugue', routerAlugue);
app.use('/criar', routerAlugue);
app.use('/atualizar', routerAlugue);
app.use('/excluir', routerAlugue);
app.use('/estoque', routerEstoque);
app.use('/criar', routerEstoque);
app.use('/atualizar', routerEstoque);
app.use('/excluir', routerEstoque);




module.exports = app;