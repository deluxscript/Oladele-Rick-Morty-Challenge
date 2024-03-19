import { useQuery } from '@apollo/client'
import { GET_EPISODE, GET_EPISODES } from '../graphql/queries.ts'
import { useMemo, useState } from 'react'

const episodesPerPage = 20

/**
 * Custom hook to manage episodes and pagination.
 *
 * This hook fetches episode data from a GraphQL API, manages pagination state,
 * and provides functions for navigation.
 *
 *  @returns An object containing functions and data for episode management.
 */
export const useEpisode = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [episodeId, setEpisodeId] = useState<string>('')

  // Fetch all episodes
  const {
    data: allEpisodes,
    loading: loadingAllEpisodes,
    error: episodesError
  } = useQuery(GET_EPISODES, { variables: { page: currentPage } })

  // Fetch a specific episode by ID
  const {
    data: episode,
    loading: loadingEpisode,
    error: episodeError
  } = useQuery(GET_EPISODE, { variables: { id: episodeId } })

  /**
   * Memoized function to calculate pagination information.
   * @returns An object containing page information.
   */
  const paginationInfo = useMemo(() => {
    if (allEpisodes) {
      const episodesCount = allEpisodes.episodes?.info?.count
      if (episodesCount) {
        const lastPageIndex = Math.ceil(episodesCount / episodesPerPage)
        const startIndex = (currentPage - 1) * episodesPerPage + 1
        const endIndex = Math.min(currentPage * episodesPerPage, episodesCount)

        return {
          startIndex,
          endIndex,
          totalEpisodes: episodesCount,
          totalPages: lastPageIndex,
          currentPage,
        }
      }
    }
    return {}
  }, [allEpisodes, currentPage])

  /**
   * Callback function to handle clicks on the previous page button.
   *
   * This function decrements the current page state if it's greater than 1,
   * effectively navigating to the previous page of episodes.
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
    /**
     * Callback function to handle page clicks.
     * @param id - The episode ID.
     */
    handleEpisodeNav (id: string) {
      setEpisodeId(id)
    },
    /**
     * Object representing a single episode retrieved by the GET_EPISODE query.
     */
    episode,
    /**
     * Boolean indicating whether the GET_EPISODE query is currently loading.
     */
    loadingEpisode,
    /**
     * Error object if the GET_EPISODE query encountered an error.
     */
    episodeError,
    /**
     * Array of episodes representing the paginated result of the GET_EPISODES query.
     */
    allEpisodes,
    /**
     * Boolean indicating whether the GET_EPISODES query is currently loading.
     */
    loadingAllEpisodes,
    /**
     * Error object if the GET_EPISODES query encountered an error.
     */
    episodesError,
    paginationInfo,
    handlePrevPage,
    handleNextPage
  }
}
