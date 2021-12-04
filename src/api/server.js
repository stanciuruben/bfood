const express = require('express')
const config = require('config');
const connectDB = require('./db');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();
connectDB();

app.use( cors() );
app.use( express.json( { extended:false } ) );
app.use( cookieParser() );

// Set Routes
app.use( '/', require( './routes/app' ) );
app.use( '/user', require( './routes/user' ) );
app.use( '/login', require( './routes/login' ) );
app.use( '/register', require( './routes/register' ) );
app.use( '/dispatch-order', require( './routes/dispatch-order' ) );

const PORT = 5000;
console.log( 'listening on port: ' + PORT );
app.listen( PORT );