const { Sequelize } = require('sequelize');

exports.getUser = (req, res, next) => {


    res.status(200).send({
        message: 'Teste de usabilidade do server',
        model: 'UserModel.findAll()'
    })
};