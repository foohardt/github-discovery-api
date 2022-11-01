import { Router } from 'express';
import { query, CustomValidator } from 'express-validator';

import * as repositoryController from '../controllers/repository.controller';

const repositoryRouter: Router = Router();

const isNotNegative: CustomValidator = (value) => {
  if (Math.sign(value) === -1) {
    return Promise.reject('Limit can not be negative');
  }

  return Promise.resolve();
};

repositoryRouter.get(
  '/',
  [
    query('created').optional().isDate(),
    query('limit').optional().custom(isNotNegative)
  ],

  repositoryController.getRepositories
);

export default repositoryRouter;
