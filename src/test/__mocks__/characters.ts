import { ApolloError } from '@apollo/client'
import { GraphQLError } from 'graphql/error'
import { MockedResponse } from '@apollo/client/testing'

import {GET_CHARACTER, GET_CHARACTERS} from '../../graphql/queries.ts'


const mockReturnedAllCharacters = {
  characters: {
    info: {
      count: 826,
      pages: 42,
      next: 2,
      prev: null
    },
    results: [
      {
        id: "1",
        name: "Rick Sanchez",
        status: "Alive",
        species: "Human",
        type: "",
        gender: "Male",
        origin: {
          id: "1",
          name: "Earth (C-137)",
          type: "Planet",
          dimension: "Dimension C-137",
        },
        location: {
          id: "3",
          name: "Citadel of Ricks",
          type: "Space station",
          dimension: "unknown",
        },
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        episode: [
          {
            id: "1",
            name: "Pilot",
            air_date: "December 2, 2013",
            episode: "S01E01",
            created: "2017-11-10T12:56:33.798Z",
          },
        ],
        created: "2017-11-04T18:48:46.250Z"
      }
    ]
  }
}

const mockReturnedCharacter = {
  character: {
    id: "20",
    name: "Ants in my Eyes Johnson",
    status: "unknown",
    species: "Human",
    type: "Human with ants in his eyes",
    gender: "Male",
    origin: {
      id: null,
      name: "unknown",
    },
    location: {
      id: "6",
      name: "Interdimensional Cable",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/20.jpeg",
    episode: [
      {
        id: "8",
        name: "Rixty Minutes",
        air_date: "March 17, 2014",
        episode: "S01E08",
      },
    ],
    created: "2017-11-04T22:34:53.659Z",
  }
}


export const charactersApolloMock: MockedResponse[] = [
  {
    request: {
      query: GET_CHARACTERS,
      variables: {
        page: 1
      }
    },
    result: {
      data: mockReturnedAllCharacters,
    },
  }
]

export const characterApolloMock: MockedResponse[] = [
  {
    request: {
      query: GET_CHARACTER,
      variables: {
        id: 1
      }
    },
    result: {
      data: mockReturnedCharacter,
    },
  },
]

export const errorAllCharactersMock: MockedResponse[] = [
  {
    request: {
      query: GET_CHARACTERS,
      variables: {
        page: 1
      }
    },
    error: new ApolloError({
      graphQLErrors: [new GraphQLError('Error fetching data')],
    }),
  },
]

export const errorCharacterMock: MockedResponse[] = [
  {
    request: {
      query: GET_CHARACTER,
      variables: {
        id: 1
      }
    },
    error: new ApolloError({
      graphQLErrors: [new GraphQLError('Error fetching data')],
    }),
  },
]
