import { Request, Response } from "express";
import { getUserByLogin } from '../services/user'
import { compare } from "../utils/handleBcrypt";
import {Role} from '../enums/index'
import Validator from '../utils/joi_validator'
import Joi from 'joi';

const postLoginSchema = Joi.object()
  .keys({
    login: Joi.string().required(), // Allow a number up to 10000 but use the default past the allowable maximum
    password: Joi.string().required(),
  })
  .required()
  .unknown(true);

interface LoginKeys {
  login: string;
  password: string;
}

export const login = async( req: Request, res: Response ) => {

  try{

    const bodyFields = req.body

    const validator = new Validator<LoginKeys>(postLoginSchema);

    console.log(!validator.validate(bodyFields))

    if (!validator.validate(bodyFields)) {
      res.status(400).send(validator.getError().details);
    }

    let userInstance = await getUserByLogin(bodyFields.login)
    
    if (userInstance === null) {
      return res.status(404).send({ msg: "Invalid user or password" })
    }

    if (!compare(bodyFields.password, userInstance.password)) {
      return res.status(400).send({ msg: "Invalid user or password" })
    }

    if(userInstance.role !== Role.ADMIN || !userInstance.active){
      return res.status(403).send({ msg: "Insufficient access" })
    }
    const token = userInstance.generateAuthToken();
    
    return res.status(202).send({ token })

  } catch (e) {
    console.log(e)
    res.status(500).send({ msg: 'Error produced during petition' })
  }

}
