import { Request, Response } from "express";
import Joi from 'joi';

import { getProductsDB, insertProductDB } from '../services/product'

import { uploadToCloudinary } from '../services/upload'

import Validator from '../utils/joi_validator'
import IProduct from "../interfaces/products";
import { bufferToDataURI } from "../utils/file";


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

const postProductSchema = Joi.object()
  .keys({
    SKU: Joi.string().required(), // Allow a number up to 10000 but use the default past the allowable maximum
    name: Joi.string().required(),
    pictures: Joi.array().required(),
    price: Joi.number().required(),
    currency: Joi.string().required(),
    code: Joi.number(),
    description: Joi.string()
  })
  .required()
  .unknown(true);

export const createProduct = async( req: Request, res: Response ) => {
  try{
    const productFields = req.body
    const {files} = req
    if (!files) throw new Error('Images are required')

    const fileFormat = files[0].mimetype.split('/')[1]

    const base64Values : string[] = []

    for (let i = 0; i < files.length; i++) {
      const { base64 } = bufferToDataURI(fileFormat, files[i].buffer)
      base64Values.push(base64)
    }
    
    const validator = new Validator<IProduct>(postProductSchema);
    if (!validator.validate(productFields)) {
      res.status(400).send(validator.getError().details);
    }

    //this should be an array with strings [url, url, url]
    const listOfUrls = await uploadToCloudinary(base64Values, fileFormat)
    const createdProduct = await insertProductDB(productFields)
    return res.status(201).json(createdProduct)
  }
  catch(e){
    console.log(e)
    res.status(500).send({ msg: 'Error produced during petition' })
  }

}
