import { Users, sequelize } from "./db";
import passport from "passport";
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt';
import server from "./server";
import protectedRoutes from './routes/Users';
import 'dotenv/config';

//import io from "./socketServer/socketHandler"; //esto lo deje porque por aca vamos a llamar lo de las autentificaciones

const PORT = process.env.PORT || 3001; //uso del .env para el puerto

//configuracion de passport
passport.use(new LocalStrategy({
  usernameField: 'email', //usamos el campo de email como nombre de usuario
  passwordField: 'password'
}, async(email: string, password: string, done: any) => {
  try {
    const user = await Users.findOne({ where: { email } }); //buscamos el usuario por email
    if (!user || !(await user.validatePassword(password))) { //validamos la contraseña
      return done(null, false, { message: 'Usuario o contraseña incorrectos' }); //enviamos el error
    }
    return done(null, user);
  } catch (error) {
    return done(error);
  }
}));

//configuramos otras estrategias
passport.serializeUser((user: Users, done: (error: any, id: string) => void) => {
  done(null, user.userId);
});

passport.deserializeUser((userId: string, done: (error: any, user?: Users) => void) => {
  Users.findByPk(userId)
    .then((user) => done(null, user))
    .catch((error) => done(error, null));
});

server.use('/api/users', protectedRoutes);

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