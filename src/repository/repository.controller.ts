import { Request, Response, NextFunction } from 'express';

import * as repositoryService from './repository.service';

async function getRepositories(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const repositories = await repositoryService.fetchRepositories();
    res.json(repositories);
  } catch (error) {
    next(error);
  }
}

export { getRepositories };
