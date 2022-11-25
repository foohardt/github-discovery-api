import chai, { assert, expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);
import axios from 'axios';

import * as repositorySearchService from './repository.search.service';

describe('Repository Search Service', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('should throw an error', async () => {
    try {
      await repositorySearchService.getRepositories();
    } catch (error) {
      expect(error).to.be.instanceOf(Error);
    }
  });

  it('should build search query based on parameters given', async () => {
    const created = '2020-01-01',
      limit = '30',
      language = 'javascript';

    const stub = sinon.stub(axios, 'get').resolves({ data: [] });

    await repositorySearchService.getRepositories(created, limit, language);

    expect(
      stub.calledWith(
        'undefined/repositories?q=created:>2020-01-01+language:javascript&sort=stars&order=desc&per_page=30'
      )
    ).to.be.true;
  });

  it('should fetch repository data', async () => {
    const stubValue = { data: { items: ['1'] } };
    const stub = sinon.stub(axios, 'get').resolves(stubValue);

    const repositories = await repositorySearchService.getRepositories();

    expect(stub.calledOnce).to.be.true;
    expect(repositories[0]).is.equal(stubValue.data.items[0]);
  });
});
