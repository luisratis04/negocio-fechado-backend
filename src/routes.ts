import express from "express";
import FisicalPersonController from "./controllers/fisicalPerson";
import LegalPersonController from "./controllers/legalPerson";
import ServiceController from "./controllers/service";

const routes = express.Router();
const fisicalPersonController = new FisicalPersonController();
const legalPersonController = new LegalPersonController();
const serviceController = new ServiceController();

routes.post("/api/v1/fisical-person", fisicalPersonController.create);
routes.post("/api/v1/legal-person", legalPersonController.create);
routes.post("/api/v1/service", serviceController.create);

export default routes;
