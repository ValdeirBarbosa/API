const { Router } = require("express");

const NotesControllers = require("../controllers/notesController")
const notesRoutes = Router();
const notesController = new NotesControllers()

// notesRoutes.get('/', (request, response) => {
//   const { page, limit } = request.query;
//   response.send(`page: ${page} limit: ${limit}`);
// });


notesRoutes.get('/', notesController.index);
notesRoutes.post('/:user_id', notesController.create);
notesRoutes.get('/:id', notesController.show );
notesRoutes.delete('/:id', notesController.delete );

module.exports = notesRoutes;