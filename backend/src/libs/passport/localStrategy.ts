// Importamos las dependencias necesarias
import { Strategy as LocalStrategy } from "passport-local"; // Estrategia de autenticación local de Passport
import bcrypt from "bcrypt"; // Biblioteca para hashear contraseñas
import boom from "@hapi/boom"; // Biblioteca para manejar errores HTTP
import { User } from "../../db"; // Modelo de usuario de la base de datos

// Creamos una nueva estrategia de autenticación local
export default new LocalStrategy({
  // Usamos el campo de email como nombre de usuario
  usernameField: 'email',
  // Usamos el campo de password como contraseña
  passwordField: 'password'
}, async (email, password, done) => {
  try {
    // Buscamos al usuario en la base de datos por su email
    const user = await User.findOne({ where: { email } }) as any;
    // Si el usuario no existe, retornamos un error
    if (!user) {
      console.log(`Inicio de sesión fallido: No se encontró el usuario con el email ${email}`);
      return done(boom.unauthorized("Invalid username or password"), false);
    }

    // Comparamos la contraseña proporcionada con la contraseña hasheada del usuario
    const passwordMatch = await bcrypt.compare(password, user.password);
    // Si las contraseñas no coinciden, retornamos un error
    if (!passwordMatch) {
      console.log(`Inicio de sesión fallido: Contraseña incorrecta para el usuario ${email}`);
      return done(boom.unauthorized("Invalid username or password"), false);
    }


    // Si todo está bien, retornamos el usuario
    console.log(`Inicio de sesión exitoso para el usuario ${email}`);
    return done(null, user);
  } catch (err) {
    console.error(`Error durante el proceso de inicio de sesión: ${err}`);
    // Si hay un error, lo retornamos
    return done(err); 
  }
});