const { Router } = require("express");

const TagsController = require("../controllers/tagsConbtroller")
const tagsRoutes = Router();
const tagsController = new TagsController()

tagsRoutes.get('/:user_id', tagsController.index);

module.exports = tagsRoutes;