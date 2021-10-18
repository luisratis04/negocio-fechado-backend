import { Request, Response } from "express";
import { IAssess } from "../interfaces/assess";
import AssessModel from "../models/assess";

export default class HireController {
  async create(request: Request, response: Response) {
    const { service_id, fisical_person_id, value } = request.body as IAssess;
    const assessModel = new AssessModel();

    const success = await assessModel.create({
      fisical_person_id,
      service_id,
      value,
    });

    if (success) return response.sendStatus(201);
    if (!success) return response.sendStatus(400);
  }
}
