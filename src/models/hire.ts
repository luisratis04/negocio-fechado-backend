import connection from "../database/connection";
import { IHire } from "../interfaces/hire";

export default class HireModel {
  async create({ fisical_person_id, service_id }: IHire): Promise<boolean> {
    try {
      await connection("hire").insert({ fisical_person_id, service_id });
      return true;
    } catch (error) {
      console.warn(error);
      return false;
    }
  }
}
