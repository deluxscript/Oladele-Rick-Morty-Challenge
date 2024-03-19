import { Link, useParams } from 'react-router-dom'
import { useEpisode } from '../../hooks/useEpisode.ts'
import { useEffect } from 'react'

import { BaseLayout } from '../../components/BaseLayout/BaseLayout.tsx'
import { ErrorView } from '../ErrorView/ErrorView.tsx'
import { Spinner } from '../../components/Spinner/Spinner.tsx'

import './EpisodeView.scss'

export const EpisodeView = () => {
  const { episode, handleEpisodeNav, loadingEpisode, episodeError } = useEpisode()
  const { episodeId } = useParams()

  useEffect(() => {
    if (episodeId) {
      handleEpisodeNav(episodeId)
    }
  }, [episodeId, handleEpisodeNav])

  if(loadingEpisode) {
    return <Spinner />
  }

  if(episodeError) {
    return <ErrorView />
  }

  const episodeData = episode?.episode

  return (
    <BaseLayout>
      <div className='Episode-view'>
        <div className='Episode-view__title'>{episodeData?.episode} - {episodeData?.name}</div>
        <div className='Episode-view__characters'>
          <div className='Episode-view__characters-title'>List of characters in this episode</div>
          <ul className='Episode-view__characters-list'>
            {episodeData?.characters.map(character =>
              <li key={character?.id} className='Episode-view__characters-list-item'>
                <Link to={`/characters/${character?.id}`} className='Episode-view__characters-list-item--link'>{character?.name}</Link>
              </li>)}
          </ul>
        </div>
      </div>
    </BaseLayout>
  )
}
