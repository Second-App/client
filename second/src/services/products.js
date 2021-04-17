import { gql } from '@apollo/client'

export const FETCH_ALL_PRODUCTS = gql `
  query products {
    products {
      id
      name
      price
      description
      imageUrl
      location
      sold
      available
      condition
    }
  }
`

export const GET_ONE_PRODUCT = gql `
  query product($id: ID!) {
    product(id: $id) {
      id
      name
      price
      description
      imageUrl
      location
      sold
      available
      condition
    }
  }
`