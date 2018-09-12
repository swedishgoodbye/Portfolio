const express = require('express');
const mongoose = require('mongoose');

const port = process.env.PORT || 5000;

// ========== MIDDLEWARE ============== //

const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');


// CORS - OPTIONS, to fix "No 'Access-Control-Allow-Origin' header" issue

const corsOptions = {
  origin: '*',
  methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204
};


// ================ ROUTERS requires ================ //

// Project

const createProjectRouter = require('./Router/Project/createProjectRouter.js');
const findProjectRouter = require('./Router/Project/findProjectRouter.js');
const removeProjectRouter = require('./Router/Project/removeProjectRouter.js');
const updateProjectRouter = require('./Router/Project/updateProjectRouter.js');

const server = express();

mongoose.connect('mongodb://username:abcd1234@ds161391.mlab.com:61391/lambda-labs', { useNewUrlParser: true })

.then(() => console.log('\n===connected to mongo===\n'))
.catch(err =>console.log('not connected'))


server.use(express.json());
server.use(cors());
server.use(helmet());
server.use(morgan('dev'));
server.use(cors(corsOptions));

server.listen(port, () => console.log('API on port 5000'));