const Project = require("../models/Project");

const getAllProjects = async (req, res) => {
  res.status().json();
};

const createProject = async ({ user, body }, res) => {
  const { _id: id } = user;
  const project = { ...body, creator: id.toString() };
  try {
    const newProject = await Project.create(project);
    res.status(201).json(newProject);
  } catch (error) {
    error.message = "Unable to create project";
    res.status(500).json({ message: error.message });
  }
};

const getOneProject = async (req, res) => {
  res.status().json();
};

const updateProject = async (req, res) => {
  res.status().json();
};

const deleteProject = async (req, res) => {
  res.status().json();
};

const addCollaborator = async (req, res) => {
  res.status().json();
};

const deleteCollaborator = async (req, res) => {
  res.status().json();
};

const getTasks = async (req, res) => {
  res.status().json();
};

module.exports = {
  getAllProjects,
  createProject,
  getOneProject,
  updateProject,
  deleteProject,
  addCollaborator,
  deleteCollaborator,
  getTasks
};
