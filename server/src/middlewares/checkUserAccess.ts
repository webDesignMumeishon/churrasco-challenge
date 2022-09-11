import { NextFunction, Request, Response } from "express";
import moment from 'moment'

import CustomError from '../utils/errorHandler'
import { decodeJWT } from '../utils'


export const checkUserAccess = (req: Request, res: Response, next: NextFunction) => {

  try {
    if (!req.headers.authorization){
      throw new CustomError('Unauthorized', 401)
    }
    const payload = decodeJWT(req.headers.authorization)
    if (payload.exp && payload.exp <= Number(moment.now().toString().slice(0, 10))){
      throw new CustomError('Expired token.' , 401)
    }
    // @ts-ignore
    req.user = { 
      id: payload.id,
    }

  } catch (e) {
    next(e)
  }

  next()
}
