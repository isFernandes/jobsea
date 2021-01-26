const db = require("../models");
const User = db.user;
const Projeto = db.project;

module.exports = {
  async getAllProject(req, res) {
    try {
      const projects = await Projeto.find({});
      return res.status(200).json(projects);
    } catch (error) {
      return res.status(200).json(error);
    }
  },

  async getAllProjectUsers(req, res) {
    const { id } = req.params;
    try {
      const projects = await Projeto.find({ ownerId: id });
      return res.status(200).json(projects);
    } catch (error) {
      return res.status(200).json(error);
    }
  },

  async getProject(req, res) {
    const { id } = req.params;
    try {
      const project = await Projeto.findById({ _id: id });
      const owner = await User.findById({ _id: project.ownerId });
      return res.status(200).json({project: project, owner: owner.nome});
    } catch (error) {
      return res.status(200).json(error);
    }
  },

  async createProject(req, res) {
    const { nome, descricao, tempoEstimado, tagTecnicas, verba } = req.body;

    const { ownerId } = req.params;

    try {
      const newProject = {
        nome,
        descricao,
        tempoEstimado,
        tagTecnicas,
        verba,
        ownerId,
      };
      const createdProject = await Projeto.create(newProject);
      return res.status(200).json(createdProject);
    } catch (error) {
      return res.status(200).json(error);
    }
  },
  async updateProject(req, res) {
    const {
      nome,
      descricao,
      tempoEstimado,
      tagTecnicas,
      verba,
      ownerId,
    } = req.body;
    const { id } = req.params;

    const projetoLocalizado = await Projeto.findById({ _id: id });
    const updateProject = {};
    if (nome) {
      updateProject.nome = nome;
    } else {
      updateProject.nome = projetoLocalizado.nome;
    }
    if (descricao) {
      updateProject.descricao = descricao;
    } else {
      updateProject.descricao = projetoLocalizado.descricao;
    }
    if (tempoEstimado) {
      updateProject.tempoEstimado = tempoEstimado;
    } else {
      updateProject.tempoEstimado = projetoLocalizado.tempoEstimado;
    }
    if (tagTecnicas) {
      updateProject.tagTecnicas = tagTecnicas;
    } else {
      updateProject.tagTecnicas = projetoLocalizado.tagTecnicas;
    }
    if (verba) {
      updateProject.verba = verba;
    } else {
      updateProject.verba = projetoLocalizado.verba;
    }

    if (ownerId) {
      updateProject.ownerId = ownerId;
    } else {
      return res.status(500).json({message:"Estamos com algum problema"});
    }
    try {
      const updatedProject = await Projeto.findOneAndUpdate(
        { _id: id },
        {
          nome: updateProject.nome,
          descricao: updateProject.descricao,
          verba: updateProject.verba,
          tagTecnicas: updateProject.tagTecnicas,
          tempoEstimado: updateProject.tempoEstimado,
        }
      );
      return res.status(200).json(updatedProject);
    } catch (error) {
      return res.status(200).json(error);
    }
  },

  async reativarProjeto(req, res) {
    const { id } = req.params;
    try {
      await Projeto.findOneAndUpdate({ _id: id }, { ativo: true });
      return res
        .status(200)
        .json({ message: `Projeto reativado com sucesso!` });
    } catch (error) {
      return res.status(200).json(error);
    }
  },
  
  async deleteProject(req, res) {
    const { id } = req.params;
    try {
      await Projeto.findOneAndUpdate(
        { _id: id },
        { ativo: false }
      );
      return res.status(200).json({ message: `Projeto deletado com sucesso!` });
    } catch (error) {
      return res.status(200).json(error);
    }
  },

};
