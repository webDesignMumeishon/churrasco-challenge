import { Request, Response } from "express";
import { getProductsDB, insertProductDB } from '../services/product'

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

export const createProduct = async( req: Request, res: Response ) => {

  try{

    const product = req.body

    const createdProduct = await insertProductDB(product)

    return res.status(201).send(createdProduct)
  }
  catch(e){
    console.log(e)
    res.status(500).send({ msg: 'Error produced during petition' })
  }

}
