import { NextFunction, Request, Response } from "express";
import moment from 'moment'

import { decodeJWT } from '../utils'


export const authenticate = (req: Request, res: Response, next: NextFunction) => {

  try {

    if (!req.headers.authorization){
      return res.status(401).send({ msg: 'Unauthorized' })
    }

    const payload = decodeJWT(req.headers.authorization)

    if (payload.exp && payload.exp <= Number(moment.now().toString().slice(0, 10)))
      return res.status(400).send({ msg: 'Expired token.' })

    if (req.params.id && req.params.id != payload.id)
      return res.status(400).send({ msg: 'Invalid user.' })


    req.user = { 
      _id: payload._id,
      username: payload.username,
      active: payload.active,
      email: payload.active,
      firstName: payload.active,
      lastName: payload.lastName,
      lastLogin: payload.lastName,
      password: payload.password,
      role: payload.role,
    }

  } catch (e) {
    return res.status(401).send({ msg: 'Unauthorized' })
  }

  next()
}
