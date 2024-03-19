import { useLocation } from '../../hooks/useLocation.ts'
import TableContainer from '@mui/material/TableContainer'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import TableBody from '@mui/material/TableBody'
import { Link } from 'react-router-dom'

import { BaseLayout } from '../../components/BaseLayout/BaseLayout.tsx'
import { SkeletonEpisodeList } from '../SkeletonEpisodeList/SkeletonEpisodeList.tsx'
import { ErrorView } from '../ErrorView/ErrorView.tsx'

import './LocationsView.scss'

export const LocationsView = () => {
  const { allLocations,
    loadingAllLocations,
    paginationInfo,
    locationsError,
    handleNextPage, handlePrevPage } = useLocation()

  if(locationsError) {
    return <ErrorView />
  }

  const locationsData = allLocations?.locations?.results

  return (
    <BaseLayout>
      <div className='Locations-view'>
        <div className='Locations-view__header'>Locations</div>
        <div className='Locations-view__list'>
          <TableContainer className='Locations-view__list-container' component={Paper}>
            <Table className='Locations-view__list-container-table' sx={{minWidth: 650}} aria-label="simple table">
              <TableHead className='Locations-view__list-container-table--head'>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="right">Location Type</TableCell>
                  <TableCell align="right">Dimension</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
                <TableBody className='Locations-view__list-container-table--body'>
                {loadingAllLocations ? <SkeletonEpisodeList /> : locationsData && locationsData.map((location) => {
                  if (location) {
                    return (
                      <TableRow
                        key={location.id}
                        className='Locations-view__list-container-table--body-row'
                        sx={{'&:last-child td, &:last-child th': {border: 0}}}
                      >
                        <TableCell component="th" scope="row">
                          {location.name}
                        </TableCell>
                        <TableCell align="right">{location.type}</TableCell>
                        <TableCell align="right">{location.dimension}</TableCell>
                        <TableCell align="right" className='Locations-view__list-container-table--body-row-actions'>
                          <Link className='Locations-view__list-container-table--body-row-actions--link'
                                to={`/locations/${location.id}`}>View</Link>
                        </TableCell>
                      </TableRow>
                    )
                  }
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        {!loadingAllLocations &&
          <div className='Locations-view__pagination'>
            <div className='Locations-view__pagination-text'>
              Showing <span
              className='Locations-view__pagination-text--bold'>{paginationInfo.startIndex} - {paginationInfo.endIndex}</span> of <span
              className='Locations-view__pagination-text--bold'>{paginationInfo.totalLocations}</span> characters
            </div>
            <div className='Locations-view__pagination-action'>
              <button className='Locations-view__pagination-action--btn' onClick={handlePrevPage}
                      disabled={paginationInfo.currentPage === 1}>Previous
              </button>
              <button className='Locations-view__pagination-action--btn' onClick={handleNextPage}
                      disabled={paginationInfo.currentPage === paginationInfo.totalPages}>Next
              </button>
            </div>
          </div>
        }
      </div>
    </BaseLayout>
  )
}
