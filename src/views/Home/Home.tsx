import { routes } from '../../constants/routes.ts'
import { Link } from 'react-router-dom'

import Logo from '../../assets/images/logo.png'

import './Home.scss'

export const Home = () => {
  return (
    <div className='Home'>
      <div className='Home__content'>
        <img className='Home__content-media' src={Logo} alt='rick-and-morty-image'/>
        <div className='Home__content-links'>
          <Link to={routes.characters} className='Home__content-links-item'>Characters</Link>
          <Link to={routes.episodes} className='Home__content-links-item'>Episodes</Link>
          <Link to={routes.locations} className='Home__content-links-item'>Locations</Link>
        </div>
      </div>
    </div>
  )
}
