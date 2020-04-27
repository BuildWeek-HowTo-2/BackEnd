const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const UserRouter = require('../users/userRouter')


const server = express();

server.use(helmet(), cors(), morgan('dev'), express.json());

server.use('/api/users', UserRouter)

server.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to the How-To API' });
})

module.exports = server;
