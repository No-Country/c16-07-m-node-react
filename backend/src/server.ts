
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import router from './routes/index';
import { errorHandler, wrapError } from './middlewares/errorHandler';
import passport from 'passport';
import localStrategy from './libs/passport/localStrategy';

//En este archivo se crea el servidor

const server = express();

server.use(morgan('dev')); // registra las solicitudes HTTP en modo de desarrollo
server.use(express.json());//Analiza el cuerpo de las solicitudes JSON
const corsOptions = {
    origin: 'http://localhost:5173', // Reemplaza con nuestro origen específico
    credentials: true, // Configuración para permitir credenciales
    methods: 'GET, POST, OPTIONS, PUT, DELETE', // Métodos permitidos
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept' // Encabezados permitidos
  };
  
server.use(cors(corsOptions));
server.use(cors());
server.use((req, res, next) => { //manejo de CORS al agregar las cabeceras necesarias a la respuesta, esto permite al servidor aceptar peticiones de un origen diferente
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

passport.use(localStrategy);
server.use(passport.initialize());// Es un middleware de autenticación para node.js
server.use(router);
/*Importante: los siguientes dos middleware 
(wrapError y errorHandler) siempre deben 
ir luego de server.use(router) porque los errores se capturan al final*/
server.use(wrapError);
server.use(errorHandler);

export default server;