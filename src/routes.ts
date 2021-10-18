import express from "express";
import FisicalPersonController from "./controllers/fisicalPerson";
import LegalPersonController from "./controllers/legalPerson";
import ServiceController from "./controllers/service";
import HireController from "./controllers/hire";
import AssessController from "./controllers/assess";
import LoginController from "./controllers/login";

const routes = express.Router();
const fisicalPersonController = new FisicalPersonController();
const legalPersonController = new LegalPersonController();
const serviceController = new ServiceController();
const hireController = new HireController();
const assessController = new AssessController();
const loginController = new LoginController();

routes.post("/api/v1/fisical-person", fisicalPersonController.create);
routes.post("/api/v1/legal-person", legalPersonController.create);
routes.post("/api/v1/service", serviceController.create);
routes.post("/api/v1/hire", hireController.create);
routes.post("/api/v1/assess", assessController.create);
routes.get("/api/v1/login/fisical-person", loginController.loginFisicalPerson);
routes.get("/api/v1/login/legal-person", loginController.loginLegalPerson);

export default routes;
