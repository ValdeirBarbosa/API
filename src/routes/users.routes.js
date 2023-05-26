const {Router} = require("express");

const UserControllers = require("../controllers/UserControllers")
const userRoutes = Router();
function MyMiddleware(request,response,next){
  console.log(`Você passou pelo middler`)
  next()

}








const usersController = new UserControllers()


userRoutes.get('/', (request, response) => {
  const { page, limit } = request.query;

  response.send(`page: ${page} limit: ${limit}`);
});

userRoutes.post('/', MyMiddleware, usersController.create );
userRoutes.put('/:id',usersController.update );

module.exports = userRoutes;