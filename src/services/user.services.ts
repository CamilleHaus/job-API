import { injectable } from "tsyringe";
import { TLoginReturn, TUserLoginBody, TUserRegisterBody, TUserReturn, userReturnSchema } from "../schemas/user.schemas";
import bcrypt from "bcrypt"
import { prisma } from "../database/prisma";
import { AppError } from "../errors/appError";
import jwt from "jsonwebtoken";

@injectable()
export class UserServices {
    async register(body: TUserRegisterBody): Promise<TUserReturn> {
        const hashPassword = await bcrypt.hash(body.password, 10)

        const newUSer = {
            ...body,
            password: hashPassword
        }

        const user = await prisma.user.create({ data: newUSer })

        return userReturnSchema.parse(user)


        // Retira a senha do user para não ser retornada

    }

    async login(body: TUserLoginBody): Promise<TLoginReturn> {

        const user = await prisma.user.findFirst({
            where: { email: body.email }
        })

        if (!user) {
            throw new AppError(404, "User not registered")
        }

        const compare = bcrypt.compare(
            body.password,
            user.password
        )

        if (!compare) {
            throw new AppError(404, "Credentials not valid")
        }

        const secret = process.env.JWT_SECRET as string;

        const token = jwt.sign({ id: user.id }, secret)

        return { accessToken: token, user: userReturnSchema.parse(user) }
    }

    async getUser(id: number): Promise<TUserReturn> {

        const user = await prisma.user.findFirst({
            where: { id }
        })

        return userReturnSchema.parse(user)

    }
}