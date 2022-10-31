import express from 'express';

import * as repositoryController from './repository.controller';

const repositoryRouter = express.Router();

repositoryRouter.get('/popularity', repositoryController.getRepositories);

export default repositoryRouter;
