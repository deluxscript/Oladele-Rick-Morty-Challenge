import { Link, useParams } from 'react-router-dom'
import { useLocation } from '../../hooks/useLocation.ts'
import { useEffect } from "react"

import { BaseLayout } from '../../components/BaseLayout/BaseLayout.tsx'
import { ErrorView } from '../ErrorView/ErrorView.tsx'
import { Spinner } from '../../components/Spinner/Spinner.tsx'

import './LocationView.scss'

export const LocationView = () => {
  const { location, handleLocationNav, loadingLocation, locationError } = useLocation()
  const { locationId } = useParams()

  useEffect(() => {
    if (locationId) {
      handleLocationNav(locationId)
    }
  }, [locationId, handleLocationNav])

  if(loadingLocation) {
    return <Spinner />
  }

  if(locationError) {
    return <ErrorView />
  }

  const locationData = location?.location

  return (
    <BaseLayout>
      <div className='Location-view'>
        <div className='Location-view__title'>{locationData?.name}</div>
        <div className='Location-view__characters'>
          <div className='Location-view__characters-title'>List of characters in this Location</div>
          <ul className='Location-view__characters-list'>
            {locationData?.residents.map(character =>
              <li key={character?.id} className='Location-view__characters-list-item'>
                <Link to={`/characters/${character?.id}`} className='Location-view__characters-list-item--link'
                      target='_blank'>{character?.name}</Link>
              </li>)}
          </ul>
        </div>
      </div>
    </BaseLayout>
  )
}
