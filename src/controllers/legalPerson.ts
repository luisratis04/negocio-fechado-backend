import { Request, Response } from "express";
import { ILegalPerson } from "../interfaces/legalPerson";
import LegalPersonModel from "../models/legalPerson";

export default class LegalPersonController {
  async create(request: Request, response: Response) {
    const { name, email, password, cnpj } = request.body as ILegalPerson;
    const legalPersonModel = new LegalPersonModel();

    const success = await legalPersonModel.create({
      name,
      email,
      password,
      cnpj,
    });

    if (success) return response.sendStatus(201);
    if (!success) return response.sendStatus(400);
  }
}
