import { Router } from "express";
import { CreateCategoryController } from "./controllers/CreateCategoryController";

const routes = Router();

//handle automatically receive request and response
routes.post("/categories", new CreateCategoryController().handle);

export { routes };