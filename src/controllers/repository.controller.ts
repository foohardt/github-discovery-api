import { Request, Response, NextFunction } from 'express';

import * as repositoryService from '../services/repository.search.service';

async function getRepositories(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const repositories = await repositoryService.fetchRepositories(
      '2020-01-12',
      3,
    );
    res.json(repositories);
  } catch (error) {
    next(error);
  }
}

export { getRepositories };
