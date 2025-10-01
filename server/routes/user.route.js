import express from "express";
import { Router } from "express";
import { create,getUsers,getUser ,deletUser,update} from "../controller/user.controller.js";

const userRoutes = express.Router();

userRoutes.post("/user", create);
userRoutes.get("/user", getUsers);
userRoutes.get("/user/:id", getUser);
userRoutes.put("/update/user/:id", update);
userRoutes.put("/delete/user/:id", deletUser);

export default userRoutes;