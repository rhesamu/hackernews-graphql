/**
 * Resolvers object is the actual implementation of the GraphQL schema.
 */

const resolvers = {
  Query: {
    info: () => 'This is the API of a Hackernews Clone',
    feed: (root, args, context, info) => context.prisma.links(),
    link: (parent, args, context) => context.prisma.link({ id: args.id })
  },
  Mutation: {
    post: (root, args, context) => context.prisma.createLink({
      url: args.url,
      description: args.description
    })
  },
  Link: {
    id: parent => parent.id,
    description: parent => parent.description,
    url: parent => parent.url
  }
};

module.exports = resolvers;
