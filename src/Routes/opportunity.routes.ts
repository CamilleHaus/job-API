import { Router } from "express";
import { OpportunityControllers } from "../controllers/opportunityControllers";
import { applicationRouter } from "./application.routes";
import { ValidateBody } from "../middleware/validateBody.middleware";
import { opportunityCreateSchema, opportunityUpdateSchema } from "../schemas/opportunity.schemas";
import { IsOpportunityIdValid } from "../middleware/isOpportunityIdValid.middleware";
import { ValidateToken } from "../middleware/validateToken.middleware";
import { container } from "tsyringe";
import { OpportunityServices } from "../services/opportunity.services";
import { IsOpportunityOwner } from "../middleware/isOpportunityOwner.middleware";

container.registerSingleton("OpportunityServices", OpportunityServices)
const opportunityControllers = container.resolve(OpportunityControllers)

export const opportunityRouter = Router();

opportunityRouter.post("/", ValidateToken.execute, ValidateBody.execute(opportunityCreateSchema), (req, res) => opportunityControllers.create);

opportunityRouter.get("/", (req, res) => opportunityControllers.findMany); //Todas as vagas
opportunityRouter.get("/user", ValidateToken.execute, (req, res) => opportunityControllers.findMany); // Vagas do usuário

opportunityRouter.use("/:id", IsOpportunityIdValid.execute)

opportunityRouter.get("/:id", ValidateToken.execute, IsOpportunityOwner.execute, (req, res) => opportunityControllers.findOne);
opportunityRouter.patch("/:id", ValidateToken.execute, IsOpportunityOwner.execute, ValidateBody.execute(opportunityUpdateSchema), (req, res) => opportunityControllers.update);
opportunityRouter.delete("/:id", ValidateToken.execute, IsOpportunityOwner.execute, (req, res) => opportunityControllers.delete);

opportunityRouter.use("/", applicationRouter);

// Roteador referenciado dentro de outro roteador