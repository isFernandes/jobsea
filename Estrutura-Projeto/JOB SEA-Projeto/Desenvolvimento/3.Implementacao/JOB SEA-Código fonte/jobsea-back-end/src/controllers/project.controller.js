const db = require("../models");
const User = db.user;
const Projeto = db.project;
const mongoose = require("mongoose")

module.exports = {
  async getAllProject(req, res) {
    try {
      const projects = await Projeto.aggregate([
        {
          $lookup: {
            from: "usuarios",
            localField: "ownerId",
            foreignField: "_id",
            as: "project_owner",
          },
        },
      ]);
      return res.status(200).json(projects);
    } catch (error) {
      return res
        .status(500)
        .json({ message: `Ocorreu um erro, tente mais tarde!` });
    }
  },

  async getAllProjectUsers(req, res) {
    const { id } = req.params;
    try {
      const projects = await Projeto.find({ ownerId: id });
      return res.status(200).json(projects);
    } catch (error) {
      return res
        .status(500)
        .json({ message: `Ocorreu um erro, tente mais tarde!` });
    }
  },

  async getAllSubProjectUsers(req, res) {
    const { id } = req.params;
    try {
      const user = await User.find({ _id: id });
      const newId = user[0]._id;
      console.log(newId)

      const subProject = await User.aggregate([
        { $match: { _id: newId } },
        {
          $lookup: {
            from: "projetos",
            localField: "projects",
            foreignField: "_id",
            as: "projects_subscribe",
          },
        },
      ]);
      return res.status(200).json(subProject);
    } catch (error) {
      console.log(error)
      return res
        .status(500)
        .json({ message: `Ocorreu um erro, tente mais tarde!` });
    }
  },

  async getProject(req, res) {
    const { id } = req.params;
    try {
      const project = await Projeto.findById({ _id: id });
      const owner = await User.findById({ _id: project.ownerId });
      return res.status(200).json({ project: project, owner: owner.nome });
    } catch (error) {
      return res
        .status(500)
        .json({ message: `Ocorreu um erro, tente mais tarde!` });
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
      await Projeto.create(newProject);
      return res.status(200).json({ message: `Projeto criado com sucesso!` });
    } catch (error) {
      return res
        .status(500)
        .json({ message: `Ocorreu um erro, tente mais tarde!` });
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
      return res.status(500).json({ message: "Estamos com algum problema" });
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
      return res.status(200).json({ message: `Atualizado com sucesso!` });
    } catch (error) {
      return res
        .status(500)
        .json({ message: `Ocorreu um erro, tente mais tarde!` });
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
      return res
        .status(500)
        .json({ message: `Ocorreu um erro, tente mais tarde!` });
    }
  },

  async deleteProject(req, res) {
    const { id } = req.params;
    try {
      await Projeto.findOneAndUpdate({ _id: id }, { ativo: false });
      return res.status(200).json({ message: `Projeto deletado com sucesso!` });
    } catch (error) {
      return res
        .status(500)
        .json({ message: `Ocorreu um erro, tente mais tarde!` });
    }
  },
};
