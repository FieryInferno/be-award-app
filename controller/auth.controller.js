import {validationResult} from 'express-validator';
import {User} from '../models';

let code;
let status;
let message;
let data;

export const login = async (req, res) => {
  code = 400;
  status = 'Failed';
  data = {};

  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      status = 'Bad Request';
      message = errors;
      data = {};
    } else {
      const user = await User.findOne({where: {email: req.body.email}});

      if (user) {
        code = 200;
        status = 'Success';
        message = 'Success';
        data = {
          ...user.dataValues,
          token: jwt.sign({id}, config.secret, {expiresIn: '1h'}),
        };
      } else {
        message = 'Email Address is not exists';
      }
    }
  } catch (error) {
    code = 400;
    message = error;
  } finally {
    return res.status(code).send({status, message, data});
  }
};
