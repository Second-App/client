import { gql } from '@apollo/client'

export const FETCH_CATEGORIES = gql`
  query categories {
    categories {
      id
      name
      url
    }
  }
`

export const FETCH_SINGLE_CATEGORY = gql `
  query category($id: ID!) {
    category(id: $id) {
      id
      name
      url
    }
  }
`