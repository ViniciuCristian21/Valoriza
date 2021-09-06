import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
const router = Router();


const crateUsersController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const complimentController = new CreateComplimentController();


router.post("/tags", ensureAdmin, createTagController.handle)
router.post("/users", crateUsersController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/compliments", complimentController.handle);
export { router };