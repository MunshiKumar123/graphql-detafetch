import { gql } from "@apollo/client";

export const GET_USER_LIST = gql`
  query {
    User {
      UserName
      Email
      Role
    }
  }
`;
