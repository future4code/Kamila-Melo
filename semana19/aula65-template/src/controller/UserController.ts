import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserDatabase } from "../data/UserDatabase";
import { HashGenerator } from "../services/hashGenerator";
import { IdGenerator } from "../services/idGenerator";
import { TokenGenerator } from "../services/tokenGenerator";

export class UserController {
  
  private static userBusiness = new UserBusiness(
    new UserDatabase(),
    new IdGenerator(),
    new HashGenerator(),
    new TokenGenerator()
  );

  public async signup(req: Request, res: Response) {
    try {
      const result = await UserController.userBusiness.signup(
        req.body.name,
        req.body.email,
        req.body.password,
        req.body.role
      );
      res.status(200).send(result);
    } catch (err) {
      res.status(err.errorCode || 400).send({ message: err.message });
    }
  }

  public async login(req: Request, res: Response) {
    const email = req.body.email;
    const password = req.body.password;
    try {
      const result = await UserController.userBusiness.login(email, password);
      res.status(200).send(result);
    } catch (err) {
      res.status(err.errorCode || 400).send({ message: err.message });
    }
  }

  public async getUserById(req: Request, res: Response){
    const id = req.params.id

    try {
      const result = await UserController.userBusiness.getUserById(id)
      res.status(200).send(result)
    } catch (error) {
      res.status(error.errorCode || 400).send({ message: error.message })
    }
  }

  public async getAllUsers(req: Request, res: Response){
    try {
      const token = req.headers.authorization as string
      const tokenGenerator = new TokenGenerator()
      const role = tokenGenerator.verify(token)
      const result = await UserController.userBusiness.getAllUsers(role.role)

      res.status(200).send(result)
    } catch (error) {
      res.status(400).send({message: error.message})
    }
  }

  public async getProfile(req: Request, res: Response){
    try {
      const token = req.headers.authorization as string
      const tokenGenerator = new TokenGenerator()
      const id = tokenGenerator.verify(token)
      const result = await UserController.userBusiness.getUserById(id.id)

      res.status(200).send(result)
    } catch (error) {
      res.status(400).send({message: error.message})
    }
  }
}
