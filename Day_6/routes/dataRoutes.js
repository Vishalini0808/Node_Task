import express from "express";
import { 
  dataController, 
  headerController, 
  quesryController, 
  userController 
} from "../controllers/dataController.js";

const routes = express.Router();

routes.post("/user", userController);          // BODY
routes.get("/datas/:user_id", dataController); // PARAMS
routes.get("/query", quesryController);        // QUERY
routes.get("/auth", headerController);         // HEADERS

export default routes;
