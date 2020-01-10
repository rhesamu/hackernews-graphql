const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { APP_SECRET, getUserId } = require('../utils/getUserId');

function post(root, args, context) {
  const userId = getUserId(context);
  return context.prisma.createLink({
    url: args.url,
    description: args.description,
    postedBy: {
      connect: {
        id: userId
      }
    }
  })
}

async function signup(root, args, context, info) {
  const password = await bcrypt.hash(args.password, 10);
  const user = await context.prisma.createUser({
    ...args,
    password
  });

  const token = jwt.sign({ userId: user.id }, APP_SECRET);

  return { token, user };
}

async function login(root, args, context, info) {
  const user = await context.prisma.user({ email: args.email });
  if(!user) {
    throw new Error('User does not exist');
  }

  const isValid = await bcrypt.compare(args.password, user.password);
  if (!isValid) {
    throw new Error('Invalid password');
  }

  const token = jwt.sign({ userId: user.id}, APP_SECRET);

  return { token, user };
}

module.exports = {
  post,
  login,
  signup
}
