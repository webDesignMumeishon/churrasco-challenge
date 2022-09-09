import express from 'express';
import dotenv from 'dotenv';
import { run } from './configs/database.config'


import router from './routes'
import config from './configs';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

config(app)

router(app);

run()
  .then(() => console.log('Database initializated'))
  .catch(err => console.error('Error during database initialization: ', err))

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
