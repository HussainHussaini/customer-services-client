import { gql } from "@apollo/client";

export const GET_Plans = gql`
query{
    plans{
      _id
      title
      description
      price
      details
    }
  }
`;
