// import "dotenv/config";
// import express from "express";
// import router from "./router";

// const { NODE_ENV, PORT } = process.env;
// const app = express();

// app.use(express.json());
// router(app);

// const server = app.listen(PORT, () =>
//   console.log(`Server running in ${NODE_ENV} mode on port ${PORT}`)
// );

// export default server;

import { sequelize } from "./db";
import server from "./server";
import 'dotenv/config';
//import io from "./socketServer/socketHandler";

const PORT = process.env.PORT || 3001; //uso del .env para el puerto


sequelize
  .sync({ force: false })
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error: Error) => {
    // Declara el tipo del parámetro 'error'
    console.error('Error al sincronizar la base de datos', error.message);
  });