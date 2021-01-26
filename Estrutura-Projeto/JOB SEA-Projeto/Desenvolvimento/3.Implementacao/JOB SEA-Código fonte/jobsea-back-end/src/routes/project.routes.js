const { authJwt } = require("../middlewares");
const controller = require("../controllers/project.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/projeto/all", controller.getAllProject);

  app.get(
    "/api/projeto/all/:id",
    [authJwt.verifyToken],
    controller.getAllProjectUsers
  );

  app.get("/api/projeto/:id", [authJwt.verifyToken], controller.getProject);

  app.post(
    "/api/projeto/:ownerId",
    [authJwt.verifyToken],
    controller.createProject
  );

  app.put("/api/projeto/:id", [authJwt.verifyToken], controller.updateProject);
 
  app.put("/api/projeto/reativar/:id", [authJwt.verifyToken], controller.reativarProjeto);

  app.delete(
    "/api/projeto/:id",
    [authJwt.verifyToken],
    controller.deleteProject
  );
};
