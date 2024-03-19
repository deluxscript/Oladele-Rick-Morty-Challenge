import Skeleton from 'react-loading-skeleton'

import { useCharacter } from '../../hooks/useCharacter.ts'

import { ProfileCard } from '../../components/ProfileCard/ProfileCard.tsx'
import { SkeletonCharacterList } from '../SkeletonCharacterList/SkeletonCharacterList.tsx'
import { BaseLayout } from '../../components/BaseLayout/BaseLayout.tsx'
import { ErrorView } from '../ErrorView/ErrorView.tsx'

import 'react-loading-skeleton/dist/skeleton.css'
import './CharactersView.scss'

export const CharactersView = () => {
  const {
    allCharacters,
    loadingAllCharacters,
    charactersError,
    paginationInfo,
    handleNextPage,
    handlePrevPage
  } = useCharacter()

  if (charactersError) {
    return <ErrorView />
  }

  const charactersData = allCharacters?.characters?.results

  return (
    <BaseLayout>
      {loadingAllCharacters ? <Skeleton wrapper={SkeletonCharacterList} />
        : <div className='Characters-view'>
            <div className='Characters-view__header'>Characters</div>
            <div className='Characters-view__content'>
              {charactersData && charactersData.map(character => {
                  if (character) {
                    return <ProfileCard
                      key={character.id}
                      id={character.id}
                      name={character.name}
                      img={character.image}
                      species={character.species}
                      origin={character.origin?.name}
                      location={character.location?.name}
                    />
                  }
                }
              )}
            </div>
            <div className='Characters-view__pagination'>
              <div className='Characters-view__pagination-text'>
                Showing <span
                className='Characters-view__pagination-text--bold'>{paginationInfo.startIndex} - {paginationInfo.endIndex}</span> of <span
                className='Characters-view__pagination-text--bold'>{paginationInfo.totalCharacters}</span> characters
              </div>
              <div className='Characters-view__pagination-action'>
                <button className='Characters-view__pagination-action--btn' onClick={handlePrevPage}
                        disabled={paginationInfo.currentPage === 1}>Previous
                </button>
                <button className='Characters-view__pagination-action--btn' onClick={handleNextPage}
                        disabled={paginationInfo.currentPage === paginationInfo.totalPages}>Next
                </button>
              </div>
            </div>
        </div>
      }
    </BaseLayout>
  )
}
