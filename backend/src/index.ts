import { sequelize } from "./db";
import server from "./server";
import 'dotenv/config';
//import io from "./socketServer/socketHandler"; //esto lo deje porque por aca vamos a llamar lo de las autentificaciones

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