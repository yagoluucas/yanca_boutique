import { homeContent } from './mocks/home';
import type { HomePageContent } from './types';

/**
 * Ponto único de acesso ao conteúdo da home.
 * A implementação poderá consultar o CMS futuramente sem alterar a página.
 */
export async function getHomeContent(): Promise<HomePageContent> {
  return homeContent;
}
