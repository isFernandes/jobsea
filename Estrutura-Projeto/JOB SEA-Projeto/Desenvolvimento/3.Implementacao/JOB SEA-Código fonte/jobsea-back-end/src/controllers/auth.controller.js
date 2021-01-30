const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
var nodemailer = require("nodemailer");

exports.signup = (req, res) => {
  const user = new User({
    nome: req.body.nome,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
  });

  user.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    res.send({ message: "Usuario cadastrado com sucesso!" });
  });
};

exports.signin = (req, res) => {
  User.findOne({
    email: req.body.email,
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (!user) {
      return res.status(404).send({ message: "Usuario não encontrado." });
    }

    var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

    if (!passwordIsValid) {
      return res.status(401).send({
        accessToken: null,
        message: "Senha ou usuário inválidos!",
      });
    }

    var token = jwt.sign({ id: user.id }, config.secret, {
      expiresIn: 86400, // 24 hours
    });

    res.status(200).send({
      id: user._id,
      nome: user.nome,
      email: user.email,
      accessToken: token,
    });
  });
};

const transporter = nodemailer.createTransport({
  host: 'smtp.umbler.com',
  port: 587,
  auth: {
      user: 'no-replay@jobsea.com.br',
      pass: 'Juju2603#'
  }
});


exports.remember = (req, res) => {
  User.findOne({
      email: req.body.email,
  }).exec((err, user) => {
      if (err) {
          res.status(500).send({ message: err });
          return;
      }

      if (!user) {
          return res.status(404).send({ message: "Usuario não encontrado." });
      }

      transporter.sendMail({
          from: 'no-replay@jobsea.com.br',
          to: user.email,
          subject: 'Lembrar minha senha - Jobsea',
          html: `<h1>Recuperação de senha</h1>
            <h5>E-mail: ${user.email}</h5>
            <h5>Senha : ${user.password}</h5>
          `
      });

      res.send({ message: "Dados enviados para seu e-mail!" });

  });
};