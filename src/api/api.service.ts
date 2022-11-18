import axios, { AxiosRequestConfig } from 'axios';
import { RespositorySearchItem } from '../api/interfaces/repository.search.item';
import { RepositoryItem } from '../services/repository.search.service';

/**
 * Function to get axios request config for GitHub Search API
 *
 * @returns Axios request config
 */
function getRequestConfig(): AxiosRequestConfig {
  const config: AxiosRequestConfig = {
    baseURL: process.env.GITHUB_SEARCH_API
  };

  return config;
}

/**
 * Function to get repository search query
 *
 * @param created Date in string format (yyyy/mm/dd)
 * @param limit Number of items per page
 * @param language String of Primary programming language
 * @returns query string
 */
 function getRepositorySearchQuery(
    created: string,
    limit: number,
    language: string
  ): string {
    const lang = language.length > 0 ? `+language:${language}` : '';
    const q = `q=created:>${created}${lang}&sort=stars&order=desc&per_page=${limit}`;
  
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
export async function fetchRepositories(
  created: string = '2019-01-01',
  limit: number = 30,
  language: string = ''
): Promise<RepositoryItem[]> {
  const url = `/repositories?${getRepositorySearchQuery(
    created,
    limit,
    language
  )}`;

  const response = await axios.get(url, getRequestConfig());

  const items = response.data.items;

  const respositories = items.map((x: RespositorySearchItem) => ({
    id: x.id,
    name: x.name,
    fullName: x.fullName,
    starGazersCount: x.stargazersCount,
    watchersCount: x.watchersCount,
    language: x.language
  }));

  return respositories;
}
