import { fetchRepositories } from '../api/api.service';

interface RepositoryItem {
  id: string;
  name: string;
  fullName: string;
  starGazersCount: number;
  watchersCount: number;
  language: string;
}

/**
 * Function to get repositories ordered by popularity
 *
 * @param created Date since items were created
 * @param limit Items per page to be fetched
 * @param language Primary language repositories are written in
 * @returns list of repositories
 */
async function getRepositories(
  created: string = '2019-01-01',
  limit: number = 30,
  language: string = ''
): Promise<RepositoryItem[]> {
  try {

    const repositories = fetchRepositories(created, limit, language)
    return repositories;
  } catch (error) {
    throw new Error(`Error fetching repositories: ${error}`);
  }
}

export { getRepositories, RepositoryItem };
