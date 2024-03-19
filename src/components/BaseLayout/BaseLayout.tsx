import { FC, PropsWithChildren } from 'react'
import { routes } from '../../constants/routes.ts'
import { Link, useNavigate } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

import './BaseLayout.scss'

export const Header: FC = () => {
  return (
    <div className='Base-Layout__header'>
      <Link to={routes.home} className='Base-Layout__header-title'>Home</Link>
    </div>
  )
}

export const BaseLayout: FC<PropsWithChildren> = props => {
  const navigate = useNavigate()

  return (
    <div className='Base-Layout'>
      <Header/>
      <div className='Base-Layout__wrapper'>
          <div className='Base-Layout__wrapper-back' onClick={() => navigate(-1)}>
            <ArrowBackIcon/>
            <span className='Base-Layout__wrapper-back--text'>Back</span>
          </div>
        {props.children}
      </div>
    </div>
  )
}
