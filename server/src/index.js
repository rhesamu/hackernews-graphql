const { GraphQLServer } = require('graphql-yoga');

const typeDefs = `
  type Query {
    info: String!
  }
`;

const resolvers = {
  Query: {
    info: () => 'This is a Hackernews clone API'
  }
};

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

const PORT = 4000;
const options = {
  port: PORT,
  endpoint: '/',
  subscriptions: '/',
  playground: '/playground'
};

server.start(options, ({ port }) => console.log(`Server is running on port: ${port}`));
