const express = require('express')
const config = require('config');
const connectDB = require('./db');
const cookieParser = require('cookie-parser');

const app = express();
connectDB();

app.use(express.json( { extended:false } ));
app.use(cookieParser());

// Set Routes
app.use('/', require( './routes/login' ));
app.use('/login', require( './routes/login' ));
app.use('/register', require( './routes/register' ));
app.use('/app', require( './routes/app' ));

const PORT = 5000;
server.listen( PORT );