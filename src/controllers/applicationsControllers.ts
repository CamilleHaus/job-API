import { Request, Response } from "express";
import { ApplicationServices } from "../services/application.services";
import { inject, injectable } from "tsyringe";

@injectable()
export class ApplicationControllers {

    constructor(@inject("ApplicationServices") private applicationServices: ApplicationServices) {}

    async create(req: Request, res: Response) {
         const response = await this.applicationServices.create(req.body, Number(req.params.id));

         return res.status(200).json(response)
    }

    async findMany(req: Request, res: Response) {
        const response = await this.applicationServices.findMany(Number(req.params.id));
        
        return res.status(200).json(response)
    }

}