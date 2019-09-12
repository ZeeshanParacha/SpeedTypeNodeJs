
const express = require('express');
const router = express.Router();

router.use('/randomWords', require('./users.js'))

router.use('/usersAuth', require('./auth'))

router.use('/scores', require('./score.js'))

module.exports = router;
