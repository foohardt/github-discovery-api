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

/**
 * @openapi
 * /repositories:
 *   get:
 *     tags:
 *      - Repositories
 *     description: Get repositories by popularity (star rating descending).
 *     parameters:
 *      - in: query
 *        name: created
 *        schema:
 *          type: string
 *        description: Optional. Returns the most popular repositories created from date given onwards. Format yyyy-mm-dd. Defaults to 2019-01-01.
 *      - in: query
 *        name: limit
 *        schema:
 *          type: number
 *        description: Optional. Limits number of repositories returned. E.g. top 10, top 50 or top 100. Defaults to 30.
 *      - in: query
 *        name: language
 *        schema:
 *          type: string
 *        description: Optional. Adds filter for programming language. Examples javascript, java, typescript, assembly, etc.
 *     responses:
 *       200:
 *         description: Succesful operation
 *       400:
 *         description: Invalid status value
 *       500:
 *         description: Internal server error
 */

repositoryRouter.get(
  '/',
  [
    query('created').optional().isDate(),
    query('limit').optional().custom(isNotNegative)
  ],

  repositoryController.getRepositories
);

export default repositoryRouter;
