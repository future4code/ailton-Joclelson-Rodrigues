import { Router } from "express";
import showController from "../dependencies/ShowDependecies";

const showRouter = Router();

showRouter.post("/create", showController.create);

export default showRouter;
