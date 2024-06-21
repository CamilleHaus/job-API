import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/appError";
import jwt  from "jsonwebtoken";

export class ValidateToken {
    static execute (req: Request, res: Response, next: NextFunction) {

        const authorization = req.headers.authorization;

        const token = authorization?.replace("Bearer ", "")

        if(!token) {
            throw new AppError(403, "Token is required")
        }

        const secret = process.env.JWT_SECRET as string;

        jwt.verify(token, secret);

        res.locals.decode = jwt.decode(token)

        next();
    }
}

// Middleware de validação de token