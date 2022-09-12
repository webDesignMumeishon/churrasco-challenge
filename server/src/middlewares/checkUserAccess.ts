import { NextFunction, Request, Response } from "express";
import moment from 'moment'

import CustomError from '../utils/errorHandler'
import { decodeJWT } from '../utils'


export const checkUserAccess = (req: Request, res: Response, next: NextFunction) => {

  try {
    const getCookieValue = req.headers.cookie

    const cookies = getCookieValue.split('=')[1]

    if (!cookies) {
      throw new CustomError('Unauthorized', 401)
    }

    const payload = decodeJWT(cookies)

    if (payload.exp && payload.exp <= Number(moment.now().toString().slice(0, 10))) {
      throw new CustomError('Expired token.', 401)
    }

    
    req.user = {
      id: payload.id,
    }

  } catch (e) {
    console.log(e)
    next(e)
  }

  next()
}
