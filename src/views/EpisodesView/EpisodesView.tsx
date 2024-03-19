import { Link } from 'react-router-dom'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

import { useEpisode } from '../../hooks/useEpisode.ts'

import { BaseLayout } from '../../components/BaseLayout/BaseLayout.tsx'
import { SkeletonEpisodeList } from '../SkeletonEpisodeList/SkeletonEpisodeList.tsx'
import { ErrorView } from '../ErrorView/ErrorView.tsx'

import './EpisodesView.scss'

export const EpisodesView = () => {
  const {allEpisodes, loadingAllEpisodes, episodesError, paginationInfo, handleNextPage,
    handlePrevPage} = useEpisode()

  if (episodesError) {
    return <ErrorView />
  }

  const episodesData = allEpisodes?.episodes?.results

  return (
    <BaseLayout>
      <div className='Episodes-view'>
        <div className='Episodes-view__header'>Episodes</div>
        <div className='Episodes-view__list'>
          <TableContainer className='Episodes-view__list-container' component={Paper}>
            <Table className='Episodes-view__list-container-table' sx={{minWidth: 650}} aria-label="simple table">
              <TableHead className='Episodes-view__list-container-table--head'>
                <TableRow>
                  <TableCell>Episode</TableCell>
                  <TableCell align="right">Name</TableCell>
                  <TableCell align="right">Air Date</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
                <TableBody className='Episodes-view__list-container-table--body'>
                {
                  loadingAllEpisodes ? <SkeletonEpisodeList data-testid='loading-screen' /> :
                    episodesData && episodesData.map((episode) => {
                      if (episode) {
                        return (
                          <TableRow
                            key={episode.id}
                            className='Episodes-view__list-container-table--body-row'
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                          >
                            <TableCell component="th" scope="row">
                              {episode.episode}
                            </TableCell>
                            <TableCell align="right">{episode.name}</TableCell>
                            <TableCell align="right">{episode.air_date}</TableCell>
                            <TableCell align="right" className='Episodes-view__list-container-table--body-row-actions'>
                              <Link className='Episodes-view__list-container-table--body-row-actions--link'
                                    to={`/episodes/${episode.id}`}>View</Link>
                            </TableCell>
                          </TableRow>
                        )
                      }
                    })
                }
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        {!loadingAllEpisodes &&
          <div className='Episodes-view__pagination'>
            <div className='Episodes-view__pagination-text'>
              Showing <span
              className='Episodes-view__pagination-text--bold'>{paginationInfo.startIndex} - {paginationInfo.endIndex}</span> of <span
              className='Episodes-view__pagination-text--bold'>{paginationInfo.totalEpisodes}</span> characters
            </div>
            <div className='Episodes-view__pagination-action'>
              <button className='Episodes-view__pagination-action--btn' onClick={handlePrevPage}
                      disabled={paginationInfo.currentPage === 1}>Previous
              </button>
              <button className='Episodes-view__pagination-action--btn' onClick={handleNextPage}
                      disabled={paginationInfo.currentPage === paginationInfo.totalPages}>Next
              </button>
            </div>
          </div>
        }
      </div>
    </BaseLayout>
  )
}
