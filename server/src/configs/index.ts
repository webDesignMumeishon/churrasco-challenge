import express, { Express } from 'express';
import logger from 'morgan';
import cors from 'cors';
import "reflect-metadata"
import dotenv from 'dotenv';
import { run } from './database.config'

dotenv.config();

export default (app: Express) => {

  app.disable('x-powered-by')
  app.set('env', process.env.NODE_ENV)

  if (process.env.NODE_ENV !== 'test')
    app.use(logger('dev'))

  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))
  app.use(cors())

  run()
    .then(() => console.log('Database initializated'))
    .catch(err => console.error('Error during database initialization: ', err))
}
