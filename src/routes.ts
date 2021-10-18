import express from "express";
import FisicalPersonController from './controllers/fisicalPerson'

const routes = express.Router();
const fisicalPersonController = new FisicalPersonController()

routes.post('/api/v1/fisical-person', fisicalPersonController.create)

export default routes;
