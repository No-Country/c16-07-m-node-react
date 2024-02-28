import boom from "@hapi/boom";
import type { ErrorRequestHandler } from "express";

/*wrapError convierte errores que no vienen de boom en errores de boom*/
export const wrapError: ErrorRequestHandler = (err, req, res, next) => {
	if (!err.isBoom) next(boom.badImplementation(err));
	next(err);
}

//errorHandler lee los errores de boom y se encargara de retornar el error con su respectivo codigo
export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
	const {
		output: { statusCode },
		message,
	} = err;

	res.status(statusCode).json({error: message});
}