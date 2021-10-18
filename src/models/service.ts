import connection from "../database/connection";
import { IService } from "../interfaces/service";

export default class FisicalPersonModel {
  async create({
    title,
    description,
    legal_person_id,
  }: IService): Promise<boolean> {
    try {
      await connection("service").insert({
        title,
        description,
        legal_person_id,
      });
      return true;
    } catch (error) {
      console.warn(error);
      return false;
    }
  }
}
