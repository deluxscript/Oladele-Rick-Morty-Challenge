import { Link } from 'react-router-dom'
import ErrorIcon from '@mui/icons-material/Error'

import { BaseLayout } from '../../components/BaseLayout/BaseLayout.tsx'

import './ErrorView.scss'

export const ErrorView = () => {
  return (
    <BaseLayout>
      <div className='Error-view' data-testid='Error'>
        <div className='Error-view__text'>
          <span className='Error-view__text-icon'><ErrorIcon /></span>
          Unable to complete request
        </div>
        <Link className='Error-view__link' to={window.location.href}>Retry again</Link>
      </div>
    </BaseLayout>
  )
}
