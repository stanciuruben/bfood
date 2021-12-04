const express = require('express');
const router = express.Router();
const User = require('../models/User');
const auth = require('../middlewares/auth');

// @route   GET
// @desc    user data
// @access  Public
router.get('/', auth, async ( req, res ) => {
    const user = await User.findOne( { id: res.locals.userID } );
    if ( user === null ) {
        return res.json({ user: null });
    }
    return res.json({ user: { ...user._doc, password: null } });
});

module.exports = router;