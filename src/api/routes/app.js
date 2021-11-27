const path = require('path');
const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');

// @route   GET
// @desc    Application game
// @access  Private
router.get('/', auth, (req, res) => {
    res.sendFile( path.resolve( __dirname, '../../../public/index.html' ) );
});

module.exports = router;