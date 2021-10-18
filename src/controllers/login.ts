import { Request, Response } from "express";
import LoginModel from "../models/login";

export default class LoginController {
  async loginFisicalPerson(request: Request, response: Response) {
    const { user, password } = request.body;
    const loginModel = new LoginModel();

    const listOfUsersFounded = await loginModel.loginFisicalPerson({
      user,
      password,
    });

    return listOfUsersFounded.length > 0
      ? response.sendStatus(200)
      : response.sendStatus(401);
  }
}
