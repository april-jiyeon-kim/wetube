import express from "express";
import routes from "../routes";
import {
  changePassword,
  userDetail,
  editProfile
} from "../controllers/userController";
import { onlyPrivate } from "../middlewares";

const userRouter = express.Router();

userRouter.get(routes.editProfile, onlyPrivate, editProfile);
userRouter.get(routes.userDetail, onlyPrivate, userDetail);
userRouter.get(routes.changePassword, changePassword);

export default userRouter;
