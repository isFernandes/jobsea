const db = require("../models");
const User = db.user;

checkDuplicateUsernameOrEmail = (req, res, next) => {
  // Username
  User.findOne({
    nome: req.body.nome
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (user) {
      res.status(400).send({ message: `Falha! Nome de usuário já existente! : ${req.body.username}` });
      return;
    }

    // Email
    User.findOne({
      email: req.body.email
    }).exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (user) {
        res.status(400).send({ message: "Falha! Email já encontra em uso!" });
        return;
      }

      next();
    });
  });
};


checkExistingPassword = (req, res, next)=>{
  const {password} = req.body;

  if(!password){
    res.status(400).send({ message: "Preencha o campo de senha" });
    return;
  }

  if(password.length < 6){
    res.status(400).send({ message: "Senha menor que 6 caracteres" });
    return;
  }
  if(password.length > 40){
    res.status(400).send({ message: "Senha maior que 40 caracteres" });
    return;
  }

  next();
}

const verifySignUp = {
  checkDuplicateUsernameOrEmail,
  checkExistingPassword
};

module.exports = verifySignUp;
