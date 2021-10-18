import { Request, Response } from "express";
import LoginModel from "../models/login";
import { ILogin } from "../interfaces/login";

export default class LoginController {
  async loginFisicalPerson(request: Request, response: Response) {
    const { user, password } = request.body as ILogin;
    const loginModel = new LoginModel();

    const listOfUsersFounded = await loginModel.loginFisicalPerson({
      user,
      password,
    });

    return listOfUsersFounded.length > 0
      ? response.sendStatus(200)
      : response.sendStatus(401);
  }

  async loginLegalPerson(request: Request, response: Response) {
    const { user, password } = request.body as ILogin;
    const loginModel = new LoginModel();

    const listOfUsersFounded = await loginModel.loginLegalPerson({
      user,
      password,
    });

    return listOfUsersFounded.length > 0
      ? response.sendStatus(200)
      : response.sendStatus(401);
  }
}
