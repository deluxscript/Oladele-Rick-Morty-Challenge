import { useQuery } from '@apollo/client'
import { useMemo, useState } from 'react'

import { GET_CHARACTER, GET_CHARACTERS } from '../graphql/queries'

const charactersPerPage = 20

/**
 * Custom hook to manage characters and pagination.
 *
 * This hook fetches character data from a GraphQL API, manages pagination state,
 * and provides functions for navigation.
 *
 *  @returns An object containing functions and data for character management.
 */
export const useCharacter = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [characterId, setCharacterId] = useState<string>('')

  // Fetch all characters paginated
  const {
    data: allCharacters,
    loading: loadingAllCharacters,
    error: charactersError
  } = useQuery(GET_CHARACTERS, { variables: { page: currentPage } })

  // Fetch a specific character by ID
  const {
    data: character,
    loading: loadingCharacter,
    error: characterError
  } = useQuery(GET_CHARACTER, { variables: { id: characterId } })

  /**
   * Memoized function to calculate pagination information.
   * @returns An object containing page information.
   */
  const paginationInfo = useMemo(() => {
    if (allCharacters) {
      const charactersCount = allCharacters.characters?.info?.count
      if (charactersCount) {
        const lastPageIndex = Math.ceil(charactersCount / charactersPerPage)
        const startIndex = (currentPage - 1) * charactersPerPage + 1
        const endIndex = Math.min(currentPage * charactersPerPage, charactersCount)

        return {
          startIndex,
          endIndex,
          totalCharacters: charactersCount,
          totalPages: lastPageIndex,
          currentPage,
        }
      }
    }
    return {}
  }, [allCharacters, currentPage])

  /**
   * Callback function to handle clicks on the previous page button.
   *
   * This function decrements the current page state if it's greater than 1,
   * effectively navigating to the previous page of characters.
   */
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  /**
   * Callback function to handle clicks on the next page button.
   *
   * This function increments the current page state if it's less than the total
   * number of pages (`totalPages`) retrieved from the `paginationInfo` object.
   * This ensures navigation only occurs if there are more pages available.
   */
  const handleNextPage = () => {
    if (paginationInfo.totalPages) {
      if (currentPage < paginationInfo.totalPages) {
        setCurrentPage(currentPage + 1)
      }
    }
  }

  return {
    handlePrevPage,
    handleNextPage,
    /**
     * Callback function to handle page clicks.
     * @param id - The character ID.
     */
    handleCharacterNav (id: string) {
      setCharacterId(id)
    },
    paginationInfo,
    /**
     * Array of characters representing the paginated result of the GET_CHARACTERS query.
     */
    allCharacters,
    /**
     * Boolean indicating whether the GET_CHARACTERS query is currently loading.
     */
    loadingAllCharacters,
    /**
     * Error object if the GET_CHARACTERS query encountered an error.
     */
    charactersError,
    /**
     * Object representing a single character retrieved by the GET_CHARACTER query.
     */
    character,
    /**
     * Boolean indicating whether the GET_CHARACTER query is currently loading.
     */
    loadingCharacter,
    /**
     * Error object if the GET_CHARACTER query encountered an error.
     */
    characterError
  }
}
