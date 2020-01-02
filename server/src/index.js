const { GraphQLServer } = require('graphql-yoga');
const resolvers = require('./resolvers');

/**
 * TypeDefs defines the GraphQL schema.
 * The exclamation mark (!) means that the field can never be null
 */
const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
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
