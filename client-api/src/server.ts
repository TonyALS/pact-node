import cors from 'cors';
import express from 'express';
import routes from './routes/index';
import startMockService from './services/Pact';

const APP_PORT = 3333;

const app = express();

app.listen(APP_PORT, () => console.log(`[SERVER] Running on port ${APP_PORT}`));

app.use(cors());
app.use(express.json());
app.use(routes);
startMockService();
