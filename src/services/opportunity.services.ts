import { injectable } from "tsyringe";
import { prisma } from "../database/prisma";
import { TOpportunity, TOpportunityCreate, TOpportunityUpdate } from "../schemas/opportunity.schemas";

@injectable()
export class OpportunityServices {

    async create(body: TOpportunityCreate, userId: number) {
        const newOpportunity = {...body, userId}
        
        const data = await prisma.opportunity.create({ data: newOpportunity });

        return data;
    }

    async findMany(userId?: number) {
        const data = await prisma.opportunity.findMany({
            where: { userId }
        });

        return data;
    }

    findOne(opportunity: TOpportunity) {
    
        return opportunity;
    }

    async update(body: TOpportunityUpdate, id: number) {
        const data = await prisma.opportunity.update({
            where: { id },
            data: body,
        })

        return data;
    }

    async delete(id: number) {
        await prisma.opportunity.delete({
            where: { id}
        })
    }
}