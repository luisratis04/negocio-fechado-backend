import connection from "../database/connection";
import {
  IService,
  IServiceComplete,
  IServiceWithId,
} from "../interfaces/service";

export default class Service {
  async show(id: number): Promise<IServiceComplete> {
    const serviceList = (await connection("service")
      .select("*")
      .where("id", id)) as IService[];

    const service = serviceList[0];
    const { assess_value, hire_number } = await this.extraAttributes(id);

    return {
      ...service,
      assess_value,
      hire_number,
    };
  }

  async index(): Promise<IServiceComplete[]> {
    const serviceList = (await connection("service").select(
      "*"
    )) as IServiceWithId[];

    return await Promise.all(
      serviceList.map(async (service) => {
        const { assess_value, hire_number } = await this.extraAttributes(
          service.id
        );

        return {
          ...service,
          assess_value,
          hire_number,
        };
      })
    );
  }

  async create({
    title,
    description,
    legal_person_id,
    value
  }: IService): Promise<boolean> {
    try {
      await connection("service").insert({
        title,
        description,
        legal_person_id,
        value
      });
      return true;
    } catch (error) {
      console.warn(error);
      return false;
    }
  }

  async extraAttributes(id: number) {
    const hireList = await connection("hire")
      .select("*")
      .where("service_id", id);

    const assessValue = await connection("assess")
      .select("value", "service_id")
      .where("service_id", id)
      .avg({ avg: "value" });

    return {
      hire_number: hireList.length,
      assess_value: assessValue[0].avg as number,
    };
  }
}
