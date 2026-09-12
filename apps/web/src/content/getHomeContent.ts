import homeContent from './data/home.json';
import type { HomePageContent } from './types';

/**
 * Ponto único de acesso ao conteúdo da home.
 * O CMS publica o conteúdo em data/home.json; os componentes continuam
 * desacoplados da origem dos dados.
 */
export async function getHomeContent(): Promise<HomePageContent> {
  return homeContent as HomePageContent;
}
