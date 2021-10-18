import connection from "../database/connection";
import { IAssess } from "../interfaces/assess";

export default class HireModel {
  async create({ fisical_person_id, service_id, value }: IAssess): Promise<boolean> {
    try {
      await connection("assess").insert({ fisical_person_id, service_id, value });
      return true;
    } catch (error) {
      console.warn(error);
      return false;
    }
  }
}
