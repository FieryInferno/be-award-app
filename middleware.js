const jwt = require('jsonwebtoken');
const config = require('./config/auth.config');

exports.verifyToken = (req, res, next) => {
  const {authorization} = req.headers;

  if (!authorization) {
    return res.status(401).json({
      code: 401,
      status: 'fail',
      message: 'No token found',
    });
  }

  const bearer = authorization && authorization.split(' ')[1];

  jwt.verify(bearer, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        code: 401,
        status: 'fail',
        message: 'Unauthorized',
      });
    }

    next();
  });
};
