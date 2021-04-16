import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          read() {
            return 'some MakeVar'
          }
        }
      }
    }
  })
})

export default client