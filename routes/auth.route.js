const {body} = require('express-validator');
const {login} = require('../controller/auth.controller.js');

module.exports = (app) => {
  app.post(
      '/api/login',
      body('email').notEmpty().withMessage('Email cannot be null'),
      login,
  );
};
