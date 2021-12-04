const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    clientName: {
        type: String,
        required: true
    },
    clientEmail: {
        type: String,
        required: true,
        unique: true
    },
    address1: {
        type: String,
        required: true
    },
    address2: {
        type: String,
        required: true
    },
    items: {
        type: Array
    }
});

module.exports = Order = mongoose.model( 'bfood-order', OrderSchema );