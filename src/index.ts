import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan'

import repositoryRouter from './repository/repository.router';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(morgan("tiny"))
app.get('/', (req: Request, res: Response) => {
  res.send('GET /');
});

app.use('/repositories', repositoryRouter)

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
