import { Request, Response } from "express";
import { IHire } from "../interfaces/hire";
import HireModel from "../models/hire";

export default class HireController {
  async create(request: Request, response: Response) {
    const { service_id, fisical_person_id } = request.body as IHire;
    const hireModel = new HireModel();

    const success = await hireModel.create({
      fisical_person_id,
      service_id,
    });

    if (success) return response.sendStatus(201);
    if (!success) return response.sendStatus(400);
  }
}
