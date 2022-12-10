const {body} = require('express-validator');
const {login} = require('../controllers/auth.controller');

module.exports = (app) => {
  app.post(
      '/api/login',
      body('email').notEmpty().withMessage('Email cannot be null'),
      login,
  );
};
