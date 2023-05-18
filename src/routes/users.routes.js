const {Router} = require("express");

const userRoutes = Router();

userRoutes.get('/', (request, response) => {
  const { page, limit } = request.query;

  response.send(`page: ${page} limit: ${limit}`);
});

userRoutes.post('/', (request, response) => {
  const { name, email, password } = request.body;

  response.send(`User:${name}, E-mail:${email}, Password ${password}`);
});

module.exports = userRoutes;