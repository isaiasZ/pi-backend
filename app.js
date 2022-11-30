var express = require('express');
const mongoose = require('mongoose');
var path = require('path');
const config = require('./config/env.json')
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

var indexRouter = require('./routes/indexRoutes');
var routerAluguel = require('./routes/AluguelRouter');
var routerfrota = require('./routes/frotaRouter');
var routerUser = require('./routes/UsersRouter');

const app = express();
app.use(express.json());
       
app.use('/locadora', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/', indexRouter);
app.use('/aluguel', routerAluguel);
app.use('/frota', routerfrota);
app.use('/auth', routerUser);

mongoose.connect(config.url)
    .then(app.listen(config.porta,() =>{
        console.log('API funfando')
    }))
    .catch(error =>{
        console.log('tá dando ruim', error.message);
    });


module.exports = app;