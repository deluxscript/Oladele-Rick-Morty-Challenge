import { gql } from '../__generated__'

export const GET_CHARACTERS = gql(`
    query GetCharacters($page: Int!) {
        characters(page: $page) {
            info {
                count
                pages
                next
                prev
            }
            results {
                id
                name
                status
                species
                type
                gender
                origin {
                    id
                    name
                    type
                    dimension
                }
                location {
                    id
                    name
                    type
                    dimension
                }
                image
                episode {
                    id
                    name
                    air_date
                    episode
                    created
                }
                created
            }
        }
    }
`)

export const GET_CHARACTER = gql(`
    query GetCharacter($id: ID!) {
      character(id: $id) {
        id
        name
        status
        species
        type
        gender
        origin {
          id
          name
        }
        location {
          id
          name
        }
        image
        episode {
          id
          name
          air_date
          episode
        }
        created
      }
    }
`)

export const GET_EPISODES = gql(`
    query GetEpisodes($page: Int!) {
        episodes(page: $page) {
            info {
                count
                pages
                next
                prev
            }
            results {
                id
                name
                air_date
                episode
                created
            }
        }
    }
`)

export const GET_EPISODE = gql(`
    query GetEpisode($id: ID!) {
        episode(id: $id) {
            id
            name
            air_date
            episode
            characters {
                id
                name
            }
            created
        }
    }
`)

export const GET_LOCATIONS = gql(`
    query GET_LOCATIONS($page: Int!) {
      locations(page: $page) {
        info {
          count,
          pages,
          next,
          prev
        }
        results {
          id
          name
          type
          dimension
          created
        }
      }
    }
`)

export const GET_LOCATION = gql(`
    query GetLocation($id: ID!) {
        location(id: $id) {
            id
            name
            type
            dimension
            residents {
                id
                name
            }
            created
        }
    }
`)
