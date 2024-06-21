import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/appError";
import { ZodError } from "zod";
import { JsonWebTokenError } from "jsonwebtoken";

export class HandleErros {
    static execute(error: Error, req: Request, res: Response, next: NextFunction) {
        if (error instanceof AppError) {
            return res.status(error.statusCode).json(error.message)
        }

        if(error instanceof ZodError) {
            return res.status(422).json(error)
        }

        if (error instanceof JsonWebTokenError) {
            return res.status(403).json({message: error.message})
        }

        // Para lidar com error do JsonWebToken

        console.log(error)

        return res.status(500).json({message: "Internal server error"})
    }
}