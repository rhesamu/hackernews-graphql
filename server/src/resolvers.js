let links = [{
  id: 'link-0',
  url: 'www.howtographql.com',
  description: 'Fullstack for graphql'
}];

let idCount = links.length;

/**
 * Resolvers object is the actual implementation of the GraphQL schema.
 */
const resolvers = {
  Query: {
    info: () => 'This is the API of a Hackernews Clone',
    feed: () => links,
    link: (parent, args) => links.find(item => item.id === args.id)
  },
  Mutation: {
    post: (parent, args) => {
      const link = {
        id: `link-${idCount++}`,
        description: args.description,
        url: args.url
      }

      links.push(link);
      return link;
    }
  },
  Link: {
    id: parent => parent.id,
    description: parent => parent.description,
    url: parent => parent.url
  }
};

module.exports = resolvers;
