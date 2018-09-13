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

server.use(express.json());
server.use(cors());
server.use(helmet());
server.use(morgan('dev'));
server.use(cors(corsOptions));

// mLab connection

// mongoose.connect('mongodb://testuser:testpa$$w0rd.mlab.com:55332/heroku_22q0cls2', { useNewUrlParser: true })

// mongoose.connect('mongodb://localhost:5000', {useNewUrlParser: true})

mongoose.connect('mongodb://admin:passsw0rd@ds155292.mlab.com:55292/sptest', {useNewUrlParser: true})

// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })


.then(() => console.log('\n===connected to mongo===\n'))
.catch(err =>console.log('not connected'))

// ========== ROUTES ========== //

server.get('/', function(req, res) {
  res.send({ api: 'up and at em' });
});

// ========== ROUTERS .use =============== //

server.use('/api/cp/', createProjectRouter);
server.use('/api/fp/', findProjectRouter);
server.use('/api/rp/', removeProjectRouter);
server.use('/api/up/', updateProjectRouter);

server.listen(port, () => console.log('API on port 5000'));