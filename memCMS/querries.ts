import { gql } from '@apollo/client';

export const getAllMems = gql`
{
  allMems {
    image {
      alt
      url
    }
    title
  }
}
`;
export const getMemsNames = gql`
{
  allMems {
    title
  }
}
`;
