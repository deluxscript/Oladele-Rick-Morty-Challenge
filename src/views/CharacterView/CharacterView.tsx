import { Link, useParams } from 'react-router-dom'
import { FC, useEffect } from 'react'
import classnames from 'classnames'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

import { useCharacter } from '../../hooks/useCharacter.ts'

import { BaseLayout } from '../../components/BaseLayout/BaseLayout.tsx'
import { ErrorView } from '../ErrorView/ErrorView.tsx'
import { Spinner } from '../../components/Spinner/Spinner.tsx'

import './CharacterView.scss'


export const CharacterView = () => {
  const { character, handleCharacterNav, loadingCharacter, characterError } = useCharacter()
  const { characterId } = useParams()

  useEffect(() => {
      if (characterId) {
        handleCharacterNav(characterId)
      }
  }, [characterId, handleCharacterNav])

  if(loadingCharacter) {
    return <Spinner />
  }

  if(characterError) {
    return <ErrorView />
  }

  const characterData = character?.character

  return (
    <BaseLayout>
      <div className='Character-view'>
        <div className='Character-view__header'>
          <div className='Character-view__header-media'>
            {characterData && characterData.image && <img
              alt='player-image'
              src={characterData.image}
              width={100}
              className='Character-view__header-media-img'
            />}
          </div>
          <div className='Character-view__header-info'>
            <div className='Character-view__header-info--name'>{characterData?.name}</div>
            <div className='Character-view__header-info--status'>
              Status: <span
              className={classnames('Character-view__header-info--status-active', {'Character-view__header-info--status-inactive': characterData?.status !== 'Alive'})}>{characterData?.status}</span>
            </div>
          </div>
        </div>
        <div className='Character-view__content'>
          <div className='Character-view__content-info'>
            <div className='Character-view__content-info-title'>Character Information</div>
            <div className='Character-view__content-info-data'>
              <div className='Character-view__content-info-data--gender'>Gender: {characterData?.gender}</div>
              <div className='Character-view__content-info-data--species'>Species: {characterData?.species}</div>
              <div
                className='Character-view__content-info-data--location'>Location: {characterData?.location?.name}</div>
            </div>
          </div>
          <div className='Character-view__content-episodes'>
            <Accordion className='Character-view__content-episodes-accordion'>
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon/>}
                aria-controls='panel2-content'
                id='panel2-header'
                className='Character-view__content-episodes-accordion--summary'
              >
                <Typography className='Character-view__content-episodes-accordion--summary-typo'>
                  Episodes <span
                  className='Character-view__content-episodes-accordion--summary-typo-value'>{characterData?.episode.length}</span>
                </Typography>
              </AccordionSummary>
              <AccordionDetails className='Character-view__content-episodes-accordion--list'>
                {characterData?.episode.map(episode => episode &&
                  <EpisodeCard key={episode.id} id={episode.id} name={episode.name} episode={episode.episode}
                               airDate={episode.air_date}/>)
                }
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </BaseLayout>
  )
}

type EpisodeCardProp = {
  /**
   * The Episode's ID (optional).
   */
  id?: string | null
  /**
   * The Episode's name (optional).
   */
  name?: string | null
  /**
   * The Episode's number (optional).
   */
  episode?: string | null
  /**
   * The Episode's air date (optional).
   */
  airDate?: string | null
}

/**
 * EpisodeCard component displays information about an episode.
 *
 * This component renders a card containing the episode number,
 * name (linked to the episode details page), and air date.
 */
const EpisodeCard: FC<EpisodeCardProp> = props => {
  return (
    <div className='Episode-card'>
      <div className='Episode-card__section'>
        <div className='Episode-card__section-value'>{props.episode}</div>
        <div className='Episode-card__section-text'>
          <Link to={`/episodes/${props.id}`} className='Episode-card__section-text--link'>
            {props.name}
          </Link>
        </div>
      </div>
      <div className='Episode-card__section'>
        <div className='Episode-card__section-value'>Air date</div>
        <div className='Episode-card__section-text'>{props.airDate}</div>
      </div>
    </div>
  )
}
