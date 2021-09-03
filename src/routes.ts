import { Router } from "express";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";

const router = Router();


const crateUsersController = new CreateUserController();
const createTagController = new CreateTagController();

router.post("/tags", createTagController.handle)

router.post("/users", crateUsersController.handle);

export { router };