import connection from "../database/connection";
import { IFisicalPerson } from "../interfaces/fisicalPerson";

export default class FisicalPersonModel {
  async create({ name, email, password }: IFisicalPerson): Promise<boolean> {
    try {
      await connection("fisical-person").insert({ name, email, password });
      return true;
    } catch (error) {
      console.warn(error);
      return false;
    }
  }
}
