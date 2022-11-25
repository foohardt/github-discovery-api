import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import * as repositoryService from '../services/repository.search.service';

async function getRepositories(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const created = req.query.created?.toString();
    const limit = req.query.limit?.toString();
    const language = req.query.language?.toString();

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const repositories = await repositoryService.getRepositories(
      created,
      limit,
      language
    );

    res.json(repositories);
  } catch (error) {
    next(error);
  }
}

export { getRepositories };
