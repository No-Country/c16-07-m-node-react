import 'dotenv/config'
import sequelize from "./db";
import server from "./server";

const PORT = process.env.PORT || 3001; //uso del .env para el puerto

sequelize
  .sync()
  .then(() => {
    console.log('Conexión a la base de datos exitosa');
    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error: Error) => {
    console.error('Error al sincronizar la base de datos', error.message);
  });