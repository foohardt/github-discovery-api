import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

import repositoryRouter from './routes/repository.router';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(morgan('tiny'));

app.get('/', (req: Request, res: Response) => {
  res.send('GET /');
});

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'GitHub Discovery API',
      version: '1.0.0',
      description:
        'Simple service to discover content on GitHub using GitHub search API',
      contact: {
        name: 'Jens Erhardt',
        email: 'jenserhardt@gmail.com'
      }
    }
  },
  apis: ['./src/routes/*.ts']
};

const openapiSpecification = swaggerJsdoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification));

app.use('/repositories', repositoryRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
