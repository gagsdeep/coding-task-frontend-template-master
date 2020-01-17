const { ApolloServer, gql } = require("apollo-server");
var { getKeywordsForCategory } = require("./services/service")

const strg = new Map();

const typeDefs = gql`
  type Query {
    getKeywords(category:String!): [Category!]
  }

type Mutation {
  updateKeyword(category:String !,keyword : String !) : [Category !]
}
type Category {
  word:String
  score:Int
}
`;

const resolvers = {
  Query: {
    getKeywords: async (root, args, context) => {
      const { category } = args;
      try {
        if (strg.has(category)) {
          s
          const data = strg.get(category);
          return data;
        }

        const { data } = await getKeywordsForCategory(category);
        strg.set(category, data);
        return data;
      } catch (error) {
      }
    }
  },
  Mutation: {
    async updateKeyword(parent, args) {
      const { category, keyword } = args;
      const data = strg.get(category);
      try {
        const item = data.filter(e => e.word === keyword);
        if (!item.length) {
          data.push({ word: keyword, score: 1 });
          strg.set(category, data);
        }
        return data;
      } catch (error) {
      }

    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server
  .listen()
  .then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
