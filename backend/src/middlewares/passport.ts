import { Request, Response, NextFunction } from 'express';
import passport from 'passport';

export const passportMiddleware = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate('jwt', { session: false }, (error: any, user: any, info: any) => {
    if (error) {
      return res.status(401).json({ message: 'Error de autenticación.' });
    }
    if (!user) {
      return res.status(401).json({ message: 'No autorizado.' });
    }
    req.user = user;
    next();
  })(req, res, next);
};
