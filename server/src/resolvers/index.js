/**
 * Resolvers object is the actual implementation of the GraphQL schema.
 */

const Query = require('./Query');
const Mutation = require('./Mutation');
const Link = require('./Link');

const resolvers = {
  Query,
  Mutation,
  Link
};

module.exports = resolvers;
