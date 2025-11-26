import { gql } from "@apollo/client";

export const GET_CUSTOMER_PROFILE = gql`
  query GetCustomerProfile {
    customerProfile {
      id
      name
      email
      phone
      tier
    }
  }
`;
