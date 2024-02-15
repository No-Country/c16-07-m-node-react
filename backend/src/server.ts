import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import router from './routes/index';

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

server.use(router);

export default server;