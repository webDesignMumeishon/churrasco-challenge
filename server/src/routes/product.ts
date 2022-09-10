import { upload } from '../services/upload';
import express from 'express';
import { getProducts, createProduct } from '../controllers/product';
import { checkUserAccess } from '../middlewares/checkUserAccess';


const router = express.Router()

router
  .get('/', getProducts) // add middleware back again
  // .post('/', [checkUserAccess] , createProduct)
  .post('/' , upload.array('image'), createProduct)


export default router
