import { ApolloClient, InMemoryCache } from '@apollo/client'
import { listCategories } from '../cache'

const uri = 'http://localhost:4000'
const client = new ApolloClient({
  uri,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          listCategories: {
            read() {
              return listCategories()
            },
            merge: true
          },
        },
      },
    },
  }),
})

export default client
