import { FC } from 'react'
import { Link } from 'react-router-dom'

import './ProfileCard.scss'

type ProfileCardProps = {
  /**
   * The character's ID (optional).
   */
  id?: string | null
  /**
   * The character's name (optional).
   */
  name?: string | null
  /**
   * The character's image URL (optional).
   */
  img?: string | null
  /**
   * The character's species (optional).
   */
  species?: string | null
  /**
   * The character's origin (optional).
   */
  origin?: string | null
  /**
   * The character's location (optional).
   */
  location?: string | null
}

/**
 * ProfileCard component displays information about a character.
 * This component renders a card containing a character's image, name, species, origin,
 * location, and a "View" link to their details page.
 *
 * @param props - ProfileCard component props.
 */
export const ProfileCard:FC<ProfileCardProps> = props => {
  return (
    <div className='Profile-card' data-testid='profile-card' >
      <div className='Profile-card__header'>
        {props.img && props.name && <img src={props.img} alt={props.name}
              className='Profile-card__header-img'/>}
        <div className='Profile-card__header-title'>{props.name}</div>
      </div>
      <div className='Profile-card__content'>
        <div className='Profile-card__content-info'>
          <div className='Profile-card__content-info--species'>Species: {props.species}</div>
          <div className='Profile-card__content-info--origin'>Origin: {props.origin}</div>
          <div className='Profile-card__content-info--location'>Location: {props.location}</div>
        </div>
        <div className='Profile-card__content-action'>
          <Link to={`/characters/${props.id}`} className='Profile-card__content-action-link'>View</Link>
        </div>
      </div>
    </div>
  )
}
