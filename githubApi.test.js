
const GithubApi = require('./githubApi');

// This makes `fetch` available to our test
// (it is not by default, as normally `fetch` is only
// available within the browser)
require('jest-fetch-mock').enableMocks()

describe('Github class', () => {
  it('calls fetch and loads repo info', async () => {
    const api = new GithubApi();
    fetch.mockResponseOnce(JSON.stringify({
      name: 'rails/rails',
      description: 'Ruby on Rails'
    }));

    api.getRepoInfo('rails/rails', (repoInfo) => {
      expect(repoInfo.description).toBe('Ruby on Rails');
    });
  });
});