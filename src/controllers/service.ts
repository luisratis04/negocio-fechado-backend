import { Request, Response } from "express";
import { IService } from "../interfaces/service";
import ServiceModel from "../models/service";

export default class ServiceController {
  async show(request: Request, response: Response) {
    const { id } = request.params;
    const serviceModel = new ServiceModel();

    const service = await serviceModel.show(Number.parseInt(id));

    return response.json({ ...service });
  }

  async create(request: Request, response: Response) {
    const { title, description, legal_person_id } = request.body as IService;
    const serviceModel = new ServiceModel();

    const success = await serviceModel.create({
      title,
      description,
      legal_person_id,
    });

    if (success) return response.sendStatus(201);
    if (!success) return response.sendStatus(400);
  }
}
