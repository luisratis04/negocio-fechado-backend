import express from "express";
import FisicalPersonController from "./controllers/fisicalPerson";
import LegalPersonController from "./controllers/legalPerson";
import ServiceController from "./controllers/service";
import HireController from "./controllers/hire";
import AssessController from "./controllers/assess";

const routes = express.Router();
const fisicalPersonController = new FisicalPersonController();
const legalPersonController = new LegalPersonController();
const serviceController = new ServiceController();
const hireController = new HireController();
const assessController = new AssessController();

routes.post("/api/v1/fisical-person", fisicalPersonController.create);
routes.post("/api/v1/legal-person", legalPersonController.create);
routes.post("/api/v1/service", serviceController.create);
routes.post("/api/v1/hire", hireController.create);
routes.post("/api/v1/assess", assessController.create);

export default routes;
