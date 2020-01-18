function info() {
  return 'This is the API of a Hackernews Clone';
}

async function feed(parent, args, context, info) {
  const { filter, first, skip, orderBy } = args;
  const { prisma } = context;

  const where = filter ? {
    OR: [
      { description_contains: filter },
      { url_contains: filter }
    ]
  } : {};

  const links = await prisma.links({
    where,
    skip,
    first,
    orderBy
  });

  const count = await prisma
    .linksConnection({
      where
    })
    .aggregate()
    .count();

  return {
    links,
    count
  };
}

function link(parent, args, context) { 
  return context.prisma.link({ id: args.id });
}

module.exports = {
  info,
  feed,
  link
}
