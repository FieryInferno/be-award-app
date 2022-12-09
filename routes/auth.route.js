import {body} from 'express-validator';
import {login} from '../controller/auth.controller';

export default auth = (app) => {
  app.post(
      '/api/login',
      body('email').notEmpty().withMessage('Email cannot be null'),
      login,
  );
};
