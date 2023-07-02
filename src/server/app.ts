import express from 'express';
import { router } from './routes';
import './share/services/TraducoesYup';

import 'dotenv/config';

const app = express();

app.use(express.json())
app.use(router);

export { app };