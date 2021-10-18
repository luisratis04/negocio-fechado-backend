import connection from "../database/connection";
import { IFisicalPerson } from "../interfaces/fisicalPerson";
import { ILoginFisicalPerson } from "../interfaces/login";

export default class LoginModel {
  async loginFisicalPerson({
    user,
    password,
  }: ILoginFisicalPerson): Promise<IFisicalPerson[]> {
    const users = await connection
      .select("name", "email")
      .from("fisical-person")
      .where("email", user)
      .where("password", password);

    return users as IFisicalPerson[];
  }
}
