const express = require('express');
const router = express.Router();

const userService = require('../service/UserService');



router.get('/', userService.getUser);

module.exports = router;