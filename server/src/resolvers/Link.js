function postedBy(root, args, context) {
  return context.prisma.link({ id: parent.id }).postedBy();
}

module.exports = {
  postedBy
};
