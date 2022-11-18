import { fetchRepositories } from '../api/api.service';
import { RespositorySearchItem } from '../api/interfaces/repository.search.item';

interface RepositoryItem {
  id: number;
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
  limit: string = '30',
  language: string = ''
): Promise<RepositoryItem[]> {
  try {
    const items = await fetchRepositories(created, limit, language);

    const repositories = items.map((x: RespositorySearchItem) => ({
      id: x.id,
      name: x.name,
      fullName: x.fullName,
      starGazersCount: x.stargazersCount,
      watchersCount: x.watchersCount,
      language: x.language
    }));

    return repositories;
  } catch (error) {
    throw new Error(`Error getting repositories: ${error}`);
  }
}

export { getRepositories, RepositoryItem };
