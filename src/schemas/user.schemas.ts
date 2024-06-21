import { z } from "zod";


export const userSchema = z.object({
    id: z.number().positive(),
    name: z.string().min(1),
    email: z.string().email().min(1),
    password: z.string().min(8),
})  

export const userRegisterBodySchema = userSchema.omit({ id: true })

export const userLoginBodySchema = userRegisterBodySchema.omit({ name: true })

export const userReturnSchema = userSchema.omit({ password: true });

export type TUserRegisterBody = z.infer<typeof userRegisterBodySchema>;

export type TUserLoginBody = z.infer<typeof userLoginBodySchema>;

export type TUserReturn = z.infer<typeof userReturnSchema>;

export type TLoginReturn = { accessToken: string, user: TUserReturn }