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
//import io from "./socketServer/socketHandler";

const PORT = 3001;


sequelize
  .sync({ force: false })
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error: any) => {
    // Declara el tipo del parámetro 'error'
    console.error(error);
  });