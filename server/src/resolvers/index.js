/**
 * Resolvers object is the actual implementation of the GraphQL schema.
 */

const Query = require('./Query');
const Mutation = require('./Mutation');
const Link = require('./Link');
const User = require('./User');
const Subscription = require('./Subscription');

module.exports = {
  Query,
  Mutation,
  Subscription,
  Link,
  User
};
