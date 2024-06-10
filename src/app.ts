import express, { json } from "express";
import helmet from "helmet";
import { opportunityRouter } from "./Routes/opportunity.routes";
import { HandleErros } from "./middleware/handleErros.middleware";
import "express-async-errors";

export const app = express();

app.use(helmet());

app.use(json());

app.use("/opportunities", opportunityRouter);

app.use(HandleErros.execute);