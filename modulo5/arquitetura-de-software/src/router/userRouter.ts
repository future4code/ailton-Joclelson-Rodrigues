import { Router } from "express";
import { UserController } from "../controller/UserController";

const userRouter = Router();

const userController = new UserController();

userRouter.post("/signup", userController.signup);
userRouter.post("/login", userController.login);
userRouter.get("/", userController.getUsers);
userRouter.delete("/:id", userController.deleteUser);
userRouter.put("/:id", userController.editUser);

export default userRouter;
