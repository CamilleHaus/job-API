import { Router } from "express";
import { OpportunityControllers } from "../controllers/opportunityControllers";
import { applicationRouter } from "./application.routes";
import { ValidateBody } from "../middleware/validateBody.middleware";
import { opportunityCreateSchema, opportunityUpdateSchema } from "../schemas/opportunity.schemas";
import { IsOpportunityIdValid } from "../middleware/isOpportunityIdValid.middleware";

export const opportunityRouter = Router();

const opportunityController = new OpportunityControllers();

opportunityRouter.post("/", ValidateBody.execute(opportunityCreateSchema), opportunityController.create);
opportunityRouter.get("/", opportunityController.findMany);

opportunityRouter.use("/:id", IsOpportunityIdValid.execute)

opportunityRouter.get("/:id", opportunityController.findOne);
opportunityRouter.patch("/:id", ValidateBody.execute(opportunityUpdateSchema), opportunityController.update);
opportunityRouter.delete("/:id", opportunityController.delete);
opportunityRouter.use("/", applicationRouter);

// Roteador referenciado dentro de outro roteador