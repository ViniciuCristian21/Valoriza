import { Router } from "express";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
const router = Router();


const crateUsersController = new CreateUserController();
const createTagController = new CreateTagController();

router.post("/tags", ensureAdmin, createTagController.handle)
router.post("/users", crateUsersController.handle);

export { router };