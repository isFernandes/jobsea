const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/auth.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/usuario",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkExistingPassword
    ],
    controller.signup
  );

  app.post("/api/usuario/login", controller.signin);
};
