import express from 'express';
import morgan from 'morgan';
import router from './routes/index';
import { errorHandler, wrapError } from './middlewares/errorHandler';
import passport from 'passport';
import localStrategy from './libs/passport/localStrategy';

const server = express();

server.use(morgan('dev'));
server.use(express.json());
server.use((req, res, next) => { //manejo de CORS al agregar las cabeceras necesarias a la respuesta, esto permite al servidor aceptar peticiones de un origen diferente
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

passport.use(localStrategy);
server.use(passport.initialize());
server.use(router);
/*Importante: los siguientes dos middleware 
(wrapError y errorHandler) siempre deben 
ir luego de server.use(router)*/
server.use(wrapError);
server.use(errorHandler);

export default server;