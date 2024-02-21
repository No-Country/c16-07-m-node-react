import { Strategy as LocalStrategy } from "passport-local";
import bcrypt from "bcrypt";
import boom from "@hapi/boom";
import { User } from "@/db";

export default new LocalStrategy({
	usernameField: 'email', //usamos el campo de email como nombre de usuario
	passwordField: 'password'
  }, async (email, password, done) => {
	try {
		const user = await User.findOne({ where: { email } }) as any;
		if (!user) return done(boom.unauthorized("Invalid username or password"), false);

		const passwordMatch = await bcrypt.compare(password, user.password);
		if (!passwordMatch)
			return done(boom.unauthorized("Invalid username or password"), false);

		return done(null, user);
	} catch (err) {
		return done(err);
	}
});