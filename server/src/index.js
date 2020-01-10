require('dotenv').config();

const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('./generated/prisma-client');

const resolvers = require('./resolvers');

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: request => {
    // console.log('request', request);
    return {
      ...request,
      prisma
    };
  }
});

const PORT = 4000;
const options = {
  port: PORT,
  endpoint: '/',
  subscriptions: '/',
  playground: '/playground'
};

server.start(options, ({ port }) => console.log(`Server is running on port: ${port}`));
