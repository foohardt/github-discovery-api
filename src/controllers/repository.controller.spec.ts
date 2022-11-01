import { Request, Response, NextFunction } from 'express';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);

import * as repositoryController from './repository.controller';
import * as repositorySearchService from '../services/repository.search.service';

describe('Repository Controller', () => {
  let req: any, res: any, next: any;

  beforeEach(() => {
    req = { params: {} } as Request;
    res = { json: function () {} } as Response;
    next = sinon.spy() as NextFunction;
  });

  afterEach(() => {
    sinon.restore();
  });

  it('should return repositories', async () => {
    const stubValue = [{}];

    const mock = sinon.mock(res);
    mock.expects('json').once().withArgs([{}]);

    const stub = sinon
      .stub(repositorySearchService, 'fetchRepositories')
      .resolves(stubValue);

    await repositoryController.getRepositories(req, res, next);

    expect(stub.calledOnce).to.be.true;
    mock.verify();
  });
});
