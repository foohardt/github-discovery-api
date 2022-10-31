import axios from 'axios';

/**
 * Function to fetch repository data from GitHub search endpoint
 *
 * @param from Date items created on should be fetched (yyyy/mm/dd)
 * @param limit Limit of items to be fetched
 * @param language Primary language repositories are written in
 * @returns list of repositories
 */
async function fetchRepositories(
  from: string = '2019-01-01',
  limit: Number = 30,
  primaryLanguage?: String
) {
  const language = primaryLanguage ? `+language:${primaryLanguage}` : '';
  const query = `q=created:>${from}${language}&sort=stars&order=desc&per_page=${limit}`;
  let url = `${process.env.GITHUB_SEARCH_API}/repositories?${query}`;

  try {
    const response = await axios.get(url);
    return response.data.items;
  } catch (error) {
    throw new Error(`Error fetching repositories: ${error}`);
  }
}

export { fetchRepositories };
