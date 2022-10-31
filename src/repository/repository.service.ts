import axios from 'axios';

/**
 * Function to fetch repositorie data from GitHub search endpoint
 *
 * @param limit Limit of items to be fetched, defaults to 30
 * @param from Date items created on should be fetched, defaults to 2019-01-10
 * @returns list of repositories
 */
async function fetchRepositories(limit?: Number, from?: Date) {
  let url =
    'https://api.github.com/search/repositories?q=created:>2019-01-10&sort=stars&order=desc';

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching repositories: ${error}`);
  }
}

export { fetchRepositories };
