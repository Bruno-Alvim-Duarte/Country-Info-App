import express from 'express';
import countriesRouter from './routes/countries.routes';
import 'dotenv/config';
import cors from 'cors';

const app = express();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});

app.use(express.json());

app.use(cors());

app.use('/countries', countriesRouter);

export default app;
