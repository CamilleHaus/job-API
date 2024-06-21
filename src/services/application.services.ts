import { injectable } from "tsyringe";
import { prisma } from "../database/prisma";
import { TApplicationCreate } from "../schemas/applications.schemas";
@injectable()
export class ApplicationServices {

    async create(body: TApplicationCreate, opportunityId: number) {
        const data = await prisma.application.create({
            data: { opportunityId, ...body }
        })

        return data;
    }

    async findMany(opportunityId: number) {
        const data = await prisma.application.findMany({
            where: { id: opportunityId }
        })

        return data;
    } 
}