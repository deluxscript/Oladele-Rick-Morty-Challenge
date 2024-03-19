import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { routes } from './constants/routes.ts'

import { Home } from './views/Home/Home.tsx'
import { CharactersView } from './views/CharactersView/CharactersView.tsx'
import { CharacterView } from './views/CharacterView/CharacterView.tsx'
import { LocationView } from './views/LocationView/LocationView.tsx'
import { LocationsView } from './views/LocationsView/LocationsView.tsx'
import { EpisodeView } from './views/EpisodeView/EpisodeView.tsx'
import { EpisodesView } from './views/EpisodesView/EpisodesView.tsx'

export const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.characters} element={<CharactersView />} />
          <Route path={routes.character} element={<CharacterView />} />
          <Route path={routes.episodes} element={<EpisodesView />} />
          <Route path={routes.episode} element={<EpisodeView />} />
          <Route path={routes.locations} element={<LocationsView />} />
          <Route path={routes.location} element={<LocationView />} />
        </Routes>
    </BrowserRouter>
  )
}
