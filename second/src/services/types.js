import { gql } from '@apollo/client'

export const FETCH_ALL_TYPES = gql `
  query types {
    types {
      id
      name
    }
  }
`

export const GET_ONE_TYPE = gql `
  query oneTypes($id: ID!) {
    oneTypes(id: $id) {
      id
      name
    }
  }
`