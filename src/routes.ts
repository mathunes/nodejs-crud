import { Router } from "express";
import { CreateCategoryController } from "./controllers/CreateCategoryController";
import { GetAllCategoriesController } from "./controllers/GetAllCategoriesController";

const routes = Router();

//handle automatically receive request and response
routes.post("/categories", new CreateCategoryController().handle);

routes.get("/categories", new GetAllCategoriesController().handle);

export { routes };