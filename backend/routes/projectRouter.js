const { Router } = require("express");

const projectRouter = Router();
const {
  getAllProjects,
  createProject,
  getOneProject,
  updateProject,
  deleteProject,
  addCollaborator,
  deleteCollaborator,
  getTasks
} = require("../controllers/projectController");

const { checkAuth } = require("../middleware/checkAuth");

projectRouter.route("/")
  .all(checkAuth)
  .get(getAllProjects)
  .post(createProject);

projectRouter.route("/:id")
  .all(checkAuth)
  .get(getOneProject)
  .put(updateProject)
  .delete(deleteProject);

projectRouter.route("/tasks/:id")
  .all(checkAuth)
  .get(getTasks);

projectRouter.route("/add-collaborator")
  .all(checkAuth)
  .post(addCollaborator);

projectRouter.route("/delete-collaborator")
  .all(checkAuth)
  .post(deleteCollaborator);

module.exports = projectRouter;
