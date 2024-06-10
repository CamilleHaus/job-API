import { prisma } from "../database/prisma";
import { TOpportunity, TOpportunityCreate, TOpportunityUpdate } from "../schemas/opportunity.schemas";

export class OpportunityServices {

    async create(body: TOpportunityCreate) {
        const data = await prisma.opportunity.create({ data: body });

        return data;
    }

    async findMany() {
        const data = await prisma.opportunity.findMany();

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