import { Router } from 'express';

import * as repositoryController from '../controllers/repository.controller';

const repositoryRouter: Router = Router();

repositoryRouter.get('/', repositoryController.getRepositories);

export default repositoryRouter;
