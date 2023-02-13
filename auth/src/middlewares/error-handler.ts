import { Request, Response, NextFunction } from "express";
import { DatabaseConnectionError } from "../errors/database-connection-error";
import { RequestValidationError } from "../errors/request-validation-error";

export const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (err instanceof RequestValidationError) {
        const formattedErrors = err.errors.map((error) => {
            return { message: error.msg, field: error.param };
        });
        // console.log('handling request validation error');
        return res.status(400).send({ errors: formattedErrors });
    }
    if (err instanceof DatabaseConnectionError) {
        // console.log('handling database connection error');
        return res.status(500).send({
            errors: [
                { message: err.reason }
            ]
        });
    }
    res.status(400).send({
        message: [{ message: 'Something went wrong' }]
    });
};