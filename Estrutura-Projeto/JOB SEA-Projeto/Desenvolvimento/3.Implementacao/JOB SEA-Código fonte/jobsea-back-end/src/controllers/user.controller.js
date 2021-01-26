const db = require("../models");
const User = db.user;
const Projeto = db.project;

const SELECT = "nome email techsSkills softSkills bioDescricao ativo projects";
module.exports = {
  async getAll(req, res) {
    try {
      const users = await User.find({ ativo: true }, SELECT);
      return res.status(200).json(users);
    } catch (error) {
      return res.status(200).json(error);
    }
  },

  async getUser(req, res) {
    const { id } = req.params;
    try {
      const users = await User.findOne({ _id: id }, SELECT);
      return res.status(200).json(users);
    } catch (error) {
      return res.status(200).json(error);
    }
  },

  async subProject(req, res) {
    const { id } = req.params;
    const { projectId } = req.body;

    try {
      const project = await Projeto.findById({ _id: projectId });
      console.log(project);
      if (project) {
        const user = await User.findById({ _id: id });
        if (!user.projects.includes(projectId)) {
          user.projects.push(project);
          await user.save();
          console.log(user)
          console.log(project)
          return res.status(200).json(user);
        }

        return res.status(400).json({message:`Já inscrito no projeto`})
      }
    } catch (error) {
      return res.status(200).json(error);
    }
  },

  async updateUser(req, res) {
    const {
      nome,
      bioDescricao,
      email,
      imgUrl,
      softSkills,
      techsSkills,
    } = req.body;
    const { id } = req.params;

    try {
      const usuarioLocalizado = await User.findById({ _id: id });
      const updateUser = {};
      if (nome) {
        updateUser.nome = nome;
      } else {
        updateUser.nome = usuarioLocalizado.nome;
      }
      if (bioDescricao) {
        updateUser.bioDescricao = bioDescricao;
      } else {
        updateUser.bioDescricao = usuarioLocalizado.bioDescricao;
      }
      if (email) {
        updateUser.email = email;
      } else {
        updateUser.email = usuarioLocalizado.email;
      }
      if (imgUrl) {
        updateUser.imgUrl = imgUrl;
      } else {
        updateUser.imgUrl = usuarioLocalizado.imgUrl;
      }
      if (softSkills) {
        updateUser.softSkills = softSkills;
      } else {
        updateUser.softSkills = usuarioLocalizado.softSkills;
      }
      if (techsSkills) {
        updateUser.techsSkills = techsSkills;
      } else {
        updateUser.techsSkills = usuarioLocalizado.techsSkills;
      }
      await User.findOneAndUpdate(
        { _id: id },
        {
          nome: updateUser.nome,
          bioDescricao: updateUser.bioDescricao,
          email: updateUser.email,
          imgUrl: updateUser.imgUrl,
          softSkills: updateUser.softSkills,
          techsSkills: updateUser.techsSkills,
        }
      );

      const updatedUser = await User.findById({ _id: id }, SELECT);
      return res.status(200).json(updatedUser);
    } catch (error) {
      return res.status(200).json(error);
    }
  },

  async deleteUser(req, res) {
    const { id } = req.params;
    try {
      await User.findOneAndUpdate({ _id: id }, { ativo: false });
      return res.status(200).json({ message: `Usuario deletado com sucesso` });
    } catch (error) {
      return res.status(200).json(error);
    }
  },
  async reactivarUser(req, res) {
    const { id } = req.params;
    try {
      await User.findOneAndUpdate({ _id: id }, { ativo: true });
      return res.status(200).json({ message: `Usuario reativado com sucesso` });
    } catch (error) {
      return res.status(200).json(error);
    }
  },
};
