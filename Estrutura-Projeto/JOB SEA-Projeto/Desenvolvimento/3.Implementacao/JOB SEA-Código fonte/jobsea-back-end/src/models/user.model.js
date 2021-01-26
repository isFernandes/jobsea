const mongoose = require("mongoose");

const Usuario = mongoose.model(
  "Usuario",
  new mongoose.Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    bioDescricao: { type: String, required: false },
    imgUrl: { type: String, required: false },
    softSkills: { type: String, required: false },
    techsSkills: { type: String, required: false },
    ativo: { type: Boolean, required: false, default: true },
    projects: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Projeto",
      },
    ],
  })
);

module.exports = Usuario;
