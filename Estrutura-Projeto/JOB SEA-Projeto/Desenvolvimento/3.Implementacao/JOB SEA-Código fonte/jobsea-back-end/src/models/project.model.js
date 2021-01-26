const mongoose = require("mongoose");

const Projeto = mongoose.model(
  "Projeto",
  new mongoose.Schema({
    nome: { type: String, required: true },
    descricao: { type: String, required: true },
    tempoEstimado: { type: Number, required: true },
    tagTecnicas: { type: String, required: true },
    verba: { type: Number, required: true },
    ativo: { type: Boolean, required: false, default: true },
    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  })
);

module.exports = Projeto;
