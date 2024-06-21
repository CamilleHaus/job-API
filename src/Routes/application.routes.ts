import { Router } from "express";
import { ApplicationControllers } from "../controllers/applicationsControllers";
import { ValidateBody } from "../middleware/validateBody.middleware";
import { applicationCreateSchema } from "../schemas/applications.schemas";
import { ValidateToken } from "../middleware/validateToken.middleware";
import { ApplicationServices } from "../services/application.services";
import { container } from "tsyringe";

container.registerSingleton("ApplicationServices", ApplicationServices)
const applicationControllers = container.resolve(ApplicationControllers)

export const applicationRouter = Router();

applicationRouter.post("/:id/applications", ValidateBody.execute(applicationCreateSchema), (req, res) => applicationControllers.create);
applicationRouter.get("/:id/applications", ValidateToken.execute, (req, res) => applicationControllers.findMany);