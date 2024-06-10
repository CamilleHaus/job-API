import { Router } from "express";
import { ApplicationControllers } from "../controllers/applicationsControllers";
import { ValidateBody } from "../middleware/validateBody.middleware";
import { applicationCreateSchema } from "../schemas/applications.schemas";

export const applicationRouter = Router();

const applicationControllers = new ApplicationControllers();

applicationRouter.post("/:id/applications", ValidateBody.execute(applicationCreateSchema), applicationControllers.create);
applicationRouter.get("/:id/applications", applicationControllers.findMany);