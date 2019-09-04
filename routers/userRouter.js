import express from "express";
import routes from "../routes";
import { changePassword, userDetail, editProfile, users } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.users, users);
userRouter.get(routes.userDetails, userDetail);
userRouter.get(routes.users, editProfile);
userRouter.get(routes.changePassword, changePassword);

export default userRouter;