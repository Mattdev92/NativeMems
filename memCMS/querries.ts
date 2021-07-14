import { gql } from '@apollo/client';

export const getAllArticles = gql`
  {
    allArticles {
      title
      content
      image {
        alt
        url
      }
    }
  }
`;
