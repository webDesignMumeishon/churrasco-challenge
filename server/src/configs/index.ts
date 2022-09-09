import express, { Express } from 'express';
import logger from 'morgan';
import cors from 'cors';
import "reflect-metadata"
import dotenv from 'dotenv';

dotenv.config();

export default (app: Express) => {

  app.disable('x-powered-by')
  app.set('env', process.env.NODE_ENV)

  if (process.env.NODE_ENV !== 'test')
    app.use(logger('dev'))

  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))
  app.use(cors())


}
