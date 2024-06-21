import { Router } from "express";
import { container } from "tsyringe";
import { UserServices } from "../services/user.services";
import { UserControllers } from "../controllers/user.controllers";
import { ValidateBody } from "../middleware/validateBody.middleware";
import { userLoginBodySchema, userRegisterBodySchema } from "../schemas/user.schemas";
import { ValidateToken } from "../middleware/validateToken.middleware";

container.registerSingleton("UserServices", UserServices)
const userControllers = container.resolve(UserControllers)

export const userRouter = Router();

userRouter.post("/", ValidateBody.execute(userRegisterBodySchema), (req, res) => userControllers.register(req, res))
userRouter.post("/", ValidateBody.execute(userLoginBodySchema), (req, res) => userControllers.login(req, res))
userRouter.get("/", ValidateToken.execute, (req, res) => userControllers.login(req, res))


