import { Request, Response } from "express";
import { getProductsDB } from '../services/product'

export const getProducts = async( req: Request, res: Response ) => {

  try{
    
    return res.send({
      products: await getProductsDB()
    })
    
  } catch (e) {
    console.log(e)
    res.status(500).send({ msg: 'Error produced during petition' })
  }

}
