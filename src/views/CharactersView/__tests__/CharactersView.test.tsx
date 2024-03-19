import { cleanup, render, screen } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import { MemoryRouter } from 'react-router-dom'

import { CharactersView } from '../CharactersView.tsx'

import { charactersApolloMock, errorAllCharactersMock } from '../../../test/__mocks__/characters.ts'

describe('CharactersView component renders', () => {
  afterEach(() => {
    cleanup()
  })

  it('shows the loading screen', () => {
    render(
      <MockedProvider mocks={charactersApolloMock} addTypename={false}>
        <MemoryRouter>
          <CharactersView />
        </MemoryRouter>
      </MockedProvider>
    )

    expect(screen.getByTestId('loading-screen')).toBeInTheDocument()
  })

  it('renders the list of categories screen', async () => {
    const successfulCategoryMock = [
      {...charactersApolloMock[0], delay: 30}
    ]
    render(
      <MockedProvider mocks={successfulCategoryMock} addTypename={false}>
        <MemoryRouter>
          <CharactersView />
        </MemoryRouter>
      </MockedProvider>
    )

    expect(await screen.findByTestId('loading-screen')).toBeInTheDocument()
    expect(await screen.findByText('Rick Sanchez')).toBeInTheDocument()
  })

  it('renders the error page', async () => {
    render(
      <MockedProvider mocks={errorAllCharactersMock} addTypename={false}>
        <MemoryRouter>
          <CharactersView />
        </MemoryRouter>
      </MockedProvider>
    )

    expect(await screen.findByTestId('Error')).toBeInTheDocument()
  })
})
