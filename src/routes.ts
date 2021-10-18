import express from "express";
import FisicalPersonController from "./controllers/fisicalPerson";
import LegalPersonController from "./controllers/legalPerson";

const routes = express.Router();
const fisicalPersonController = new FisicalPersonController();
const legalPersonController = new LegalPersonController();

routes.post("/api/v1/fisical-person", fisicalPersonController.create);
routes.post("/api/v1/legal-person", legalPersonController.create);

export default routes;
