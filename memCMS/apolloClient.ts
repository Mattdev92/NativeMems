import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import config
 from '../config';
// const token = '95233d39c819c733ecd8f4f4509d08'
const url = 'https://graphql.datocms.com/';
const httpLink = createHttpLink({
  uri: url,
});
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${config.API_TOKEN}`,
    },
  };
});
export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
