import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";

const router = Router();


const crateUsersController = new CreateUserController();


router.post("/users", crateUsersController.handle);

export { router };