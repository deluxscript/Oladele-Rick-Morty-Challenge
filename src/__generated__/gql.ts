/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n    query GetCharacters($page: Int!) {\n        characters(page: $page) {\n            info {\n                count\n                pages\n                next\n                prev\n            }\n            results {\n                id\n                name\n                status\n                species\n                type\n                gender\n                origin {\n                    id\n                    name\n                    type\n                    dimension\n                }\n                location {\n                    id\n                    name\n                    type\n                    dimension\n                }\n                image\n                episode {\n                    id\n                    name\n                    air_date\n                    episode\n                    created\n                }\n                created\n            }\n        }\n    }\n": types.GetCharactersDocument,
    "\n    query GetCharacter($id: ID!) {\n      character(id: $id) {\n        id\n        name\n        status\n        species\n        type\n        gender\n        origin {\n          id\n          name\n        }\n        location {\n          id\n          name\n        }\n        image\n        episode {\n          id\n          name\n          air_date\n          episode\n        }\n        created\n      }\n    }\n": types.GetCharacterDocument,
    "\n    query GetEpisodes($page: Int!) {\n        episodes(page: $page) {\n            info {\n                count\n                pages\n                next\n                prev\n            }\n            results {\n                id\n                name\n                air_date\n                episode\n                created\n            }\n        }\n    }\n": types.GetEpisodesDocument,
    "\n    query GetEpisode($id: ID!) {\n        episode(id: $id) {\n            id\n            name\n            air_date\n            episode\n            characters {\n                id\n                name\n            }\n            created\n        }\n    }\n": types.GetEpisodeDocument,
    "\n    query GET_LOCATIONS($page: Int!) {\n      locations(page: $page) {\n        info {\n          count,\n          pages,\n          next,\n          prev\n        }\n        results {\n          id\n          name\n          type\n          dimension\n          created\n        }\n      }\n    }\n": types.Get_LocationsDocument,
    "\n    query GetLocation($id: ID!) {\n        location(id: $id) {\n            id\n            name\n            type\n            dimension\n            residents {\n                id\n                name\n            }\n            created\n        }\n    }\n": types.GetLocationDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetCharacters($page: Int!) {\n        characters(page: $page) {\n            info {\n                count\n                pages\n                next\n                prev\n            }\n            results {\n                id\n                name\n                status\n                species\n                type\n                gender\n                origin {\n                    id\n                    name\n                    type\n                    dimension\n                }\n                location {\n                    id\n                    name\n                    type\n                    dimension\n                }\n                image\n                episode {\n                    id\n                    name\n                    air_date\n                    episode\n                    created\n                }\n                created\n            }\n        }\n    }\n"): (typeof documents)["\n    query GetCharacters($page: Int!) {\n        characters(page: $page) {\n            info {\n                count\n                pages\n                next\n                prev\n            }\n            results {\n                id\n                name\n                status\n                species\n                type\n                gender\n                origin {\n                    id\n                    name\n                    type\n                    dimension\n                }\n                location {\n                    id\n                    name\n                    type\n                    dimension\n                }\n                image\n                episode {\n                    id\n                    name\n                    air_date\n                    episode\n                    created\n                }\n                created\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetCharacter($id: ID!) {\n      character(id: $id) {\n        id\n        name\n        status\n        species\n        type\n        gender\n        origin {\n          id\n          name\n        }\n        location {\n          id\n          name\n        }\n        image\n        episode {\n          id\n          name\n          air_date\n          episode\n        }\n        created\n      }\n    }\n"): (typeof documents)["\n    query GetCharacter($id: ID!) {\n      character(id: $id) {\n        id\n        name\n        status\n        species\n        type\n        gender\n        origin {\n          id\n          name\n        }\n        location {\n          id\n          name\n        }\n        image\n        episode {\n          id\n          name\n          air_date\n          episode\n        }\n        created\n      }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetEpisodes($page: Int!) {\n        episodes(page: $page) {\n            info {\n                count\n                pages\n                next\n                prev\n            }\n            results {\n                id\n                name\n                air_date\n                episode\n                created\n            }\n        }\n    }\n"): (typeof documents)["\n    query GetEpisodes($page: Int!) {\n        episodes(page: $page) {\n            info {\n                count\n                pages\n                next\n                prev\n            }\n            results {\n                id\n                name\n                air_date\n                episode\n                created\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetEpisode($id: ID!) {\n        episode(id: $id) {\n            id\n            name\n            air_date\n            episode\n            characters {\n                id\n                name\n            }\n            created\n        }\n    }\n"): (typeof documents)["\n    query GetEpisode($id: ID!) {\n        episode(id: $id) {\n            id\n            name\n            air_date\n            episode\n            characters {\n                id\n                name\n            }\n            created\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GET_LOCATIONS($page: Int!) {\n      locations(page: $page) {\n        info {\n          count,\n          pages,\n          next,\n          prev\n        }\n        results {\n          id\n          name\n          type\n          dimension\n          created\n        }\n      }\n    }\n"): (typeof documents)["\n    query GET_LOCATIONS($page: Int!) {\n      locations(page: $page) {\n        info {\n          count,\n          pages,\n          next,\n          prev\n        }\n        results {\n          id\n          name\n          type\n          dimension\n          created\n        }\n      }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetLocation($id: ID!) {\n        location(id: $id) {\n            id\n            name\n            type\n            dimension\n            residents {\n                id\n                name\n            }\n            created\n        }\n    }\n"): (typeof documents)["\n    query GetLocation($id: ID!) {\n        location(id: $id) {\n            id\n            name\n            type\n            dimension\n            residents {\n                id\n                name\n            }\n            created\n        }\n    }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;