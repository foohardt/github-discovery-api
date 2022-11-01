import axios from 'axios';

/**
 * Function to create query for search API
 *
 * @param created Date in string format (yyyy/mm/dd)
 * @param limit Number of items per page
 * @param language String of Primary programming language
 * @returns
 */
function buildQuery(created: String, limit: Number, language: String): String {
  const l = language.length > 0 ? `+language:${language}` : '';
  const q = `q=created:>${created}${l}&sort=stars&order=desc&per_page=${limit}`;

  return q;
}

/**
 * Function to fetch repository data ordered by popularity
 *
 * @param created Date since items were created
 * @param limit Items per page to be fetched
 * @param language Primary language repositories are written in
 * @returns list of repositories
 */
async function fetchRepositories(
  created: String = '2019-01-01',
  limit: Number = 30,
  language: String = ''
) {
  try {
    const query = buildQuery(created, limit, language);
    let url = `${process.env.GITHUB_SEARCH_API}/repositories?${query}`;

    const response = await axios.get(url);

    return response.data.items;
  } catch (error) {
    throw new Error(`Error fetching repositories: ${error}`);
  }
}

export { fetchRepositories };
