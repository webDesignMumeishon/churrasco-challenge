import { Request, Response } from "express";
import { getUserByLogin } from '../services/user'
import { compare, signJWT } from "../utils";
import {Role} from '../enums/index'

export const login = async( req: Request, res: Response ) => {

  try{
    const { login, password } = req.body

    let userInstance = await getUserByLogin(login)
    
    if (userInstance === null) {
      return res.status(404).send({ msg: "Invalid user or password" })
    }

    if (!compare(password, userInstance.password)) {
      return res.status(400).send({ msg: "Invalid user or password" })
    }

    if(userInstance.role !== Role.ADMIN || !userInstance.active){
      return res.status(403).send({ msg: "Insufficient access" })
    }

    //don't send the whole user
    const token = userInstance.generateAuthToken();

    console.log(token)

    return res.status(202).send({ token })

  } catch (e) {
    console.log(e)
    res.status(500).send({ msg: 'Error produced during petition' })
  }

}
