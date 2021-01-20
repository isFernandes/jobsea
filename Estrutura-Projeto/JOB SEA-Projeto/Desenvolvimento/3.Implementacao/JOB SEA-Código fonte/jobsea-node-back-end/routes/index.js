var express = require('express');
var router = express.Router();
var http = require('http');
const https = require('https')
var request = require('request');

/* GET all users. */
router.get('/api/usuario/all', function (req, res, next) {

  var options = {
    host: '200.98.204.176',
    path: '/api/usuario/all',
    port: '8080',
    method: 'GET'
  };

  callback = function (response) {
    var str = ''
    response.on('data', function (chunk) {
      str += chunk;
    });

    response.on('end', function () {
      res.send(str);
    });
  }

  var req = http.request(options, callback);
  req.end();

});

/* GET User */
router.get('/api/usuario/:id', function (req, res, next) {

  console.log('ID: ',)
  var options = {
    host: '200.98.204.176',
    path: `/api/usuario/${req.params.id}`,
    port: '8080',
    method: 'GET'
  };

  callback = function (response) {
    var str = ''
    response.on('data', function (chunk) {
      str += chunk;
    });

    response.on('end', function () {
      res.send(str);
    });
  }

  var req = http.request(options, callback);
  req.end();

});

/* Save user */
router.post('/api/usuario/', function (req, res, next) {

  request({
    url: "http://200.98.204.176:8080/api/usuario/",
    json: true,
    method: 'POST',
    headers: {
      "content-type": "application/json",
    },
    body: {
      nome: "Aluíso Teste 7",
      email: "vrogerio07@gmail.com",
      senha: "123"
    }
  }, function (error, response, body) {
    console.log(response);
  });

  res.send('tes')

});

/* UPDATE User */
router.put('/api/usuario/:id', function (req, res, next) {

  var options = {
    host: '200.98.204.176',
    path: `/api/usuario/${req.params.id}`,
    port: '8080',
    method: 'PUT'
  };

  callback = function (response) {
    var str = ''
    response.on('data', function (chunk) {
      str += chunk;
    });

    response.on('end', function () {
      res.send(str);
    });
  }

  var req = http.request(options, callback);
  req.end();

});

/* DELETE User */
router.delete('/api/usuario/:id', function (req, res, next) {

  var options = {
    host: '200.98.204.176',
    path: `/api/usuario/${req.params.id}`,
    port: '8080',
    method: 'DELETE'
  };

  callback = function (response) {
    var str = ''
    response.on('data', function (chunk) {
      str += chunk;
    });

    response.on('end', function () {
      res.json(str);
    });
  }

  var req = http.request(options, callback);
  req.end();

});



module.exports = router;
