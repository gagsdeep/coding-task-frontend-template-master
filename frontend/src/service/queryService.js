import gql from "graphql-tag";

 export const GET_KEYWORDS = gql `
  query getKeywords($category: String!) {
    getKeywords(category:$category) {
        word
    }
  }
`;