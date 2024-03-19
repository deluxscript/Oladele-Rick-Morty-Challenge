import { useQuery } from '@apollo/client'
import { GET_LOCATION, GET_LOCATIONS } from '../graphql/queries.ts'
import { useMemo, useState } from 'react'


const locationsPerPage = 20

/**
 * Custom hook to manage locations and pagination.
 *
 * This hook fetches location data from a GraphQL API, manages pagination state,
 * and provides functions for navigation.
 *
 *  @returns An object containing functions and data for location management.
 */
export const useLocation = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [locationId, setLocationId] = useState<string>('')

  // Fetch all locations
  const {
    data: allLocations,
    loading: loadingAllLocations,
    error: locationsError
  } = useQuery(GET_LOCATIONS, { variables: { page: currentPage } })

  // Fetch a specific location by ID
  const {
    data: location,
    loading: loadingLocation,
    error: locationError
  } = useQuery(GET_LOCATION, { variables: { id: locationId } })

  /**
   * Memoized function to calculate pagination information.
   * @returns An object containing page information.
   */
  const paginationInfo = useMemo(() => {
    if (allLocations) {
      const locationsCount = allLocations.locations?.info?.count
      if (locationsCount) {
        const lastPageIndex = Math.ceil(locationsCount / locationsPerPage)
        const startIndex = (currentPage - 1) * locationsPerPage + 1
        const endIndex = Math.min(currentPage * locationsPerPage, locationsCount)

        return {
          startIndex,
          endIndex,
          totalLocations: locationsCount,
          totalPages: lastPageIndex,
          currentPage,
        }
      }
    }
    return {}
  }, [allLocations, currentPage])

  /**
   * Callback function to handle clicks on the previous page button.
   *
   * This function decrements the current page state if it's greater than 1,
   * effectively navigating to the previous page of locations.
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
     * @param id - The location ID.
     */
    handleLocationNav (id: string) {
      setLocationId(id)
    },
    /**
     * Object representing a single location retrieved by the GET_LOCATION query.
     */
    location,
    /**
     * Boolean indicating whether the GET_LOCATION query is currently loading.
     */
    loadingLocation,
    /**
     * Error object if the GET_LOCATION query encountered an error.
     */
    locationError,
    /**
     * Array of locations representing the paginated result of the GET_LOCATIONS query.
     */
    allLocations,
    /**
     * Boolean indicating whether the GET_LOCATIONS query is currently loading.
     */
    loadingAllLocations,
    /**
     * Error object if the GET_LOCATIONS query encountered an error.
     */
    locationsError,
    paginationInfo,
    handlePrevPage,
    handleNextPage
  }
}
