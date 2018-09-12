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
