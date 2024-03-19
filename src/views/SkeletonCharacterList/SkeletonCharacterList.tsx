import { FC, PropsWithChildren } from 'react'

import './SkeletonCharacterList.scss'

export const SkeletonCharacterList:FC<PropsWithChildren> = props => {
  return (
    <div className='Skeleton-character-list' data-testid='loading-screen'>
      {[...Array(20)].map((_, index) =>
        <div className='Skeleton-character-list__character' key={index}>{props.children}</div>)
      }
    </div>
  )
}
