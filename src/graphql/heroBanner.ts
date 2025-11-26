import { gql } from "@apollo/client";

export const GET_HERO_BANNER = gql`
  query GetHeroBanner {
    heroBanner {
      title
      description
      imageUrl
    }
  }
`;
