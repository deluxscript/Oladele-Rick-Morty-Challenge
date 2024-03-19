import { cleanup, render, screen } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import { MemoryRouter } from 'react-router-dom'

import { EpisodesView } from '../EpisodesView.tsx'

import { episodesApolloMock, errorAllEpisodesMock } from '../../../test/__mocks__/episodes.ts'

describe('EpisodesView component renders', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders the list of categories screen', async () => {
    const successfulCategoryMock = [
      {...episodesApolloMock[0], delay: 30}
    ]
    render(
      <MockedProvider mocks={successfulCategoryMock} addTypename={false}>
        <MemoryRouter>
          <EpisodesView />
        </MemoryRouter>
      </MockedProvider>
    )

    expect(await screen.findByText('Pilot')).toBeInTheDocument()
  })

  it('renders the error page', async () => {
    render(
      <MockedProvider mocks={errorAllEpisodesMock} addTypename={false}>
        <MemoryRouter>
          <EpisodesView />
        </MemoryRouter>
      </MockedProvider>
    )

    expect(await screen.findByTestId('Error')).toBeInTheDocument()
  })
})
