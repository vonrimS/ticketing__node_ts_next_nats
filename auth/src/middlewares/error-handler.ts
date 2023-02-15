import { BadRequestError } from './../errors/bad-request-error';
import { Request, Response, NextFunction } from "express";
import { DatabaseConnectionError } from "../errors/database-connection-error";
import { NotFoundError } from "../errors/not-found-error";
import { RequestValidationError } from "../errors/request-validation-error";

export const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (err instanceof RequestValidationError) {
        return res.status(err.statusCode).send({ errors: err.serializeErrors() });
    }
    if (err instanceof DatabaseConnectionError) {
        return res.status(err.statusCode).send({ errors: err.serializeErrors() });
    }
    if (err instanceof NotFoundError) {
        return res.status(err.statusCode).send({ errors: err.serializeErrors() });
    }
    if (err instanceof BadRequestError) {
        return res.status(err.statusCode).send({ errors: err.serializeErrors() });
    }
    res.status(400).send({
        message: [{ message: 'Something went wrong' }]
    });
};