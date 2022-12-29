import express from 'express';
import rootRouter from './routes';

const app = express();
app.use('/api', rootRouter);

export default app;
