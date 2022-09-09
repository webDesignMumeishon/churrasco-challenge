import express from 'express';
import { getProducts, createProduct } from '../controllers/product';
import { checkUserAccess } from '../middlewares/checkUserAccess';


const router = express.Router()

router
  .get('/', getProducts) // add middleware back again
  .post('/', [checkUserAccess] , createProduct)


export default router
