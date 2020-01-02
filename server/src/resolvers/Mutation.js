const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

function post(root, args, context) {
  return context.prisma.createLink({
    url: args.url,
    description: args.description
  })
}

async function login() {}

async function signup() {}

module.exports = {
  post,
  login,
  signup
}
