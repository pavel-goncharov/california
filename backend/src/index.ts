import express, {Application} from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import {API} from './constants/api';
import router from './routes';
import config from './constants/config';

const PORT: number = config.PORT;
const DB_URL: string = config.DB_URL;

const app: Application = express();
app.use(express.json());
app.use(cors());
app.use(API, router);

async function start() {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
  } catch(e) {
    console.log(e);
  }
}

start();