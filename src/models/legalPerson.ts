import connection from "../database/connection";
import { ILegalPerson } from "../interfaces/legalPerson";

export default class FisicalPersonModel {
  async create({
    name,
    email,
    password,
    cnpj,
  }: ILegalPerson): Promise<boolean> {
    try {
      await connection("legal-person").insert({ name, email, password, cnpj });
      return true;
    } catch (error) {
      console.warn(error);
      return false;
    }
  }
}
