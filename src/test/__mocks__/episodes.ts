import { ApolloError } from '@apollo/client'
import { GraphQLError } from 'graphql/error'
import { MockedResponse } from '@apollo/client/testing'

import { GET_EPISODE, GET_EPISODES } from '../../graphql/queries.ts'

export const mockReturnedAllEpisodes = {
  episodes: {
    info: {
      count: 51,
      pages: 3,
      next: 2,
      prev: null
    },
    results: [
      {
        id: 1,
        name: "Pilot",
        air_date: "December 2, 2013",
        episode: "S01E01",
        created: "2017-11-10T12:56:33.798Z"
      }
    ]
  }
}

const mockReturnedEpisode = {
  episode: {
    id: '7',
    name: "Raising Gazorpazorp",
    air_date: "March 10, 2014",
    episode: "S01E07",
    characters: [
      {
        __typename: "Character",
        id: '1',
        name: "Rick Sanchez",
      },
    ],
    created: "2017-11-10T12:56:34.441Z",
  },
};



export const episodesApolloMock: MockedResponse[] = [
  {
    request: {
      query: GET_EPISODES,
      variables: {
        page: 1
      }
    },
    result: {
      data: mockReturnedAllEpisodes,
    },
  }
]

export const episodeApolloMock: MockedResponse[] = [
  {
    request: {
      query: GET_EPISODE,
      variables: {
        id: 1
      }
    },
    result: {
      data: mockReturnedEpisode,
    },
  },
]

export const errorAllEpisodesMock: MockedResponse[] = [
  {
    request: {
      query: GET_EPISODES,
      variables: {
        page: 1
      }
    },
    error: new ApolloError({
      graphQLErrors: [new GraphQLError('Error fetching data')],
    }),
  },
]

export const errorEpisodeMock: MockedResponse[] = [
  {
    request: {
      query: GET_EPISODE,
      variables: {
        id: 1
      }
    },
    error: new ApolloError({
      graphQLErrors: [new GraphQLError('Error fetching data')],
    }),
  },
]
