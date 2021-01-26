const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  //retornamos lista de usuario ativos
  app.get("/api/usuario/all", controller.getAll);

  //retornamos usuario selecionado
  app.get("/api/usuario/:id", [authJwt.verifyToken], controller.getUser);

  //atualizamos usuario logado
  app.put("/api/usuario/:id", [authJwt.verifyToken], controller.updateUser);

  //realizamos inscricao de usuario em projeto
  app.put("/api/usuario/projeto/:id", [authJwt.verifyToken], controller.subProject);

  //desativamos um usuario
  app.delete("/api/usuario/:id", [authJwt.verifyToken], controller.deleteUser);

  //reativamos um usuario deletado
  app.put("/api/usuario/reativar/:id", [authJwt.verifyToken], controller.reactivarUser);

};
