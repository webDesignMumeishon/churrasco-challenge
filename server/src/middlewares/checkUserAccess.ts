import { NextFunction, Request, Response } from "express";
import moment from 'moment'

import { decodeJWT } from '../utils'


export const checkUserAccess = (req: Request, res: Response, next: NextFunction) => {

  try {

    if (!req.headers.authorization){
      return res.status(401).send({ msg: 'Unauthorized' })
    }
    
    const payload = decodeJWT(req.headers.authorization)

    if (payload.exp && payload.exp <= Number(moment.now().toString().slice(0, 10))){
      return res.status(401).send({ msg: 'Expired token.' })
    }

    req.user = { 
      id: payload.id,
    }

  } catch (e) {
    return res.status(401).send({ msg: 'Unauthorized' })
  }

  next()
}
