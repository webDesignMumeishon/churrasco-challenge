import { Request, Response } from "express";
import Joi from 'joi';

import { getUserByLogin } from '../services/user'
import { compare } from "../utils/handleBcrypt";
import {Role} from '../enums/index'
import Validator from '../utils/joi_validator'
import {LoginStatus} from '../enums/index'

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

    if (!validator.validate(bodyFields)) {
      return res.status(400).json(validator.getError().details);
    }

    let userInstance = await getUserByLogin(bodyFields.login)

    checkPassword(bodyFields.password, userInstance.password)

    isAdmin(userInstance.role, userInstance.active)

    const token = userInstance.generateAuthToken();
    
    return res.status(202).json({ token })

  } catch (err) {

    if(LoginStatus.USER_NOT_FOUND === err.name){
      return res.status(404).json({ msg: err.message})
    }

    else if(LoginStatus.USER_NOT_ADMIN === err.name){
      return res.status(403).json({ msg: err.message})
    }

    else if(LoginStatus.INVALID_PASSWORD === err.name){
      return res.status(404).json({ msg: err.message})
    }

    res.status(500).json({ msg: 'Error produced during petition'})
  }

}

const isAdmin = (role : Role, active : boolean) : void => {
  if(role !== Role.ADMIN || !active){
    const message = role !== Role.ADMIN ? 'User is not an admin' : 'User is not active'
    const error = new Error(message)
    error.name = LoginStatus.USER_NOT_ADMIN
    throw error
  }
}

const checkPassword = (password : string, hashedPassword : string) : void => {
  if (!compare(password, hashedPassword)) {
    const error = new Error('Invalid password')
    error.name = LoginStatus.INVALID_PASSWORD
    throw error
  }
}
