import "reflect-metadata";
import cors from "cors";
import express, { json } from "express";
import helmet from "helmet";
import { opportunityRouter } from "./Routes/opportunity.routes";
import { HandleErros } from "./middleware/handleErros.middleware";
import "express-async-errors";
import { userRouter } from "./Routes/user.routes";

export const app = express();

app.use(helmet());

app.use(json());

app.use(cors())

app.use("/opportunities", opportunityRouter);

app.use("/user", userRouter)

app.use(HandleErros.execute);