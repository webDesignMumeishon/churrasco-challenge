import { Request, Response } from "express";
import * as userService from "../services/user";

export const createUser = async (req: Request, res: Response) => {

  try {
    const user = req.body;
    const newUser = await userService.insertUser(user);
    res.status(201).send(newUser)

  } catch (e) {
    console.log(e)
    res.status(500).send({ msg: 'Error produced during petition' })
  }
}

