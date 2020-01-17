
import gql from "graphql-tag";

export const UPDATE_ITEM = gql`
  mutation updateKeyword($category: String!,$keyword: String!) {
    updateKeyword(category:$category,keyword:$keyword) {
        word
    }
  }
`;