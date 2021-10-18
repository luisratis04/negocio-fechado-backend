import { Request, Response } from "express";
import { IFisicalPerson } from "../interfaces/fisicalPerson";
import FisicalPersonModel from "../models/fisicalPerson";

export default class FisicalPersonController {
  async create(request: Request, response: Response) {
    const { name, email, password } = request.body as IFisicalPerson;
    const fisicalModel = new FisicalPersonModel();

    const success = await fisicalModel.create({ name, email, password });

    if (success) return response.sendStatus(201);
    if (!success) return response.sendStatus(400);
  }
}
