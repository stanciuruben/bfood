const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const User = require('../models/User');
const Order = require('../models/Order');

// @route   POST
// @desc    dispatch order to database
// @access  Protected
router.post('/', auth, async ( req, res ) => {
    try {
        const user = await User.findOne({ id: res.locals.userID });
        await user.update({ orders: user.orders.concat( [ req.body ] ) })
        const newOrder = new Order({
            clientName: user.name,
            clientEmail: user.email,
            address1: user.address1,
            address2: user.address2,
            items: req.body
        });
        newOrder.save();
        res.json( { type: 'success', message: 'Order dispatched successfully' } );
    } catch ( err ) {
        if ( err ) {
            res.status( 500 ).json( { type: 'danger', message: 'Server error: ' + err.message } );
        }
    }
});

module.exports = router;