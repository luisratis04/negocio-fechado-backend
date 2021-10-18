import connection from "../database/connection";
import { IFisicalPerson } from "../interfaces/fisicalPerson";
import { ILegalPerson } from "../interfaces/legalPerson";
import { ILogin } from "../interfaces/login";

export default class LoginModel {
  async loginFisicalPerson({
    user,
    password,
  }: ILogin): Promise<IFisicalPerson[]> {
    const users = await connection
      .select("name", "email")
      .from("fisical-person")
      .where("email", user)
      .where("password", password);

    return users as IFisicalPerson[];
  }

  async loginLegalPerson({
    user,
    password,
  }: ILogin): Promise<IFisicalPerson[]> {
    const users = await connection
      .select("name", "email")
      .from("legal-person")
      .where("email", user)
      .where("password", password);

    return users as ILegalPerson[];
  }
}
