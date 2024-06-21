import { Request, Response } from "express";
import { OpportunityServices } from "../services/opportunity.services";
import { inject, injectable } from "tsyringe";

@injectable()
export class OpportunityControllers {

    constructor(@inject("OpportunityServices") private opportunityServices: OpportunityServices) {}

    async create(req: Request, res: Response) {
        const id = res.locals.decode?.id

        const response = await this.opportunityServices.create(req.body, id);

        return res.status(201).json(response)
    }

    async findMany(req: Request, res: Response) {
        const id = res.locals.decode?.id

        const response = await this.opportunityServices.findMany();

        return res.status(200).json(response)
    }

    findOne(req: Request, res: Response) {

        const response = this.opportunityServices.findOne(res.locals.opportunity);

        return res.status(200).json(response)
    }

    async update(req: Request, res: Response) { 

        const response = await this.opportunityServices.update(req.body, Number(req.params.id));

        return res.status(200).json(response);
    }

    async delete(req: Request, res: Response) {

        await this.opportunityServices.delete(Number(req.params.id));

        return res.status(204).json();
    }
}