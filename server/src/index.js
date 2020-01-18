require('dotenv').config();

const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('./generated/prisma-client');

const resolvers = require('./resolvers');

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: request => {
    return {
      ...request,
      prisma
    };
  }
});

const options = {
  port: process.env.PORT,
  endpoint: '/',
  subscriptions: '/',
  playground: '/playground'
};

server.start(options, ({ port }) => console.log(`Server is running on port: ${port}`));
