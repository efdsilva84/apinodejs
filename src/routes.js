const router = require('express').Router()

//importando controller 
const UserController = require('../src/controller/UserController');
router.post('/login',  UserController.login /*(req, res) => res.json({ success: true})*/)
module.exports = router