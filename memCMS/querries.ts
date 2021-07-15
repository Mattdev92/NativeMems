import { gql } from '@apollo/client';

export const getAllMems = gql`
{
  allMems {
    id
    image {
      alt
      url
    }
    title
  }
}
`;

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
