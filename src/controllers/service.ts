import { Request, Response } from "express";
import { IService } from "../interfaces/service";
import ServiceModel from "../models/service";

export default class FisicalPersonController {
  async create(request: Request, response: Response) {
    const { title, description, legal_person_id } = request.body as IService;
    const serviceModel = new ServiceModel();

    const success = await serviceModel.create({
      title,
      description,
      legal_person_id
    });

    if (success) return response.sendStatus(201);
    if (!success) return response.sendStatus(400);
  }
}
