import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { ProfileCard } from '../ProfileCard.tsx'

const mockCharacterData = {
  id: '123',
  name: 'Rick Sanchez',
  img: 'https://example.com/rick.jpg',
  species: 'Human',
  origin: 'Earth (C-137)',
  location: 'Earth (Replacement Dimension)',
}

describe('ProfileCard component', () => {
  it('renders the character information correctly', () => {

    render(
      <MemoryRouter>
        <ProfileCard {...mockCharacterData} />
      </MemoryRouter>
    )

    const card = screen.getByTestId('profile-card')
    const name = screen.getByText(mockCharacterData.name)
    const img = screen.getByAltText('Rick Sanchez')
    const species = screen.getByText(/Species: Human/i)
    const origin = screen.getByText(/Origin: Earth \(C-137\)/i)
    const location = screen.getByText(/Location: Earth \(Replacement Dimension\)/i)

    expect(card).toBeInTheDocument()
    expect(name).toBeInTheDocument()
    expect(img).toBeInTheDocument()
    expect(species).toBeInTheDocument()
    expect(origin).toBeInTheDocument()
    expect(location).toBeInTheDocument()

  })

  it('should navigate to ... when link is clicked', () => {
    render(
      <MemoryRouter>
        <ProfileCard {...mockCharacterData} />
      </MemoryRouter>
    )

    const viewLink = screen.getByRole('link', { name: /View/i })
    expect(viewLink).toHaveAttribute('href', '/characters/123')
  })
})
