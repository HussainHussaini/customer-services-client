import gql from "graphql-tag";

export const GET_ALL_PLANS = gql`
  query GetPlans {
    plans {
      _id
      title
      description
      price
      details
    }
  }
`;
