export enum Routes {
  HOME='/',
  CHARACTERS='/characters',
  CHARACTER = '/characters/:characterId',
  EPISODES='/episodes',
  EPISODE='/episodes/:episodeId',
  LOCATIONS='/locations',
  LOCATION='/locations/:locationId',
}

export const routes = {
  home: Routes.HOME,
  characters: Routes.CHARACTERS,
  character: Routes.CHARACTER,
  episodes: Routes.EPISODES,
  episode: Routes.EPISODE,
  locations: Routes.LOCATIONS,
  location: Routes.LOCATION
}
