/**
 * Resolvers object is the actual implementation of the GraphQL schema.
 */

const Query = require('./Query');
const Mutation = require('./Mutation');
const Link = require('./Link');
const User = require('./User');

const resolvers = {
  Query,
  Mutation,
  Link,
  User
};

module.exports = resolvers;
