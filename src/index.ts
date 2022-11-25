import express, { Express, NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { ApiError } from './api/api.error';

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

app.use((error: any, res: Response) => {
  console.error('----- An error happened -----');
  console.error(error);

  // Only send if error ocurred before sending response
  if (!res.headersSent) {
    res.status(error.status || 500);

    // A limited amount of information sent in production
    if (process.env.NODE_ENV === 'production') {
      res.json(error);
    } else {
      res.json(
        JSON.parse(JSON.stringify(error, Object.getOwnPropertyNames(error)))
      );
    }
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
