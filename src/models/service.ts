import connection from "../database/connection";
import { IService, IServiceComplete } from "../interfaces/service";

export default class Service {
  async show(id: number): Promise<IServiceComplete> {
    const serviceList = (await connection("service")
      .select("*")
      .where("id", id)) as IService[];

    const hireList = await connection("hire").select("*").where("service_id", id);
    console.log(hireList)

    const service = serviceList[0];

    return { ...service, hire_number: hireList.length };
  }

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
