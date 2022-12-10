const {Award} = require('../models');

let code;
let status;
let message;
let data;

exports.get = async (req, res) => {
  code = 400;
  status = 'Failed';
  data = {};

  try {
    code = 201;
    status = 'Success';
    message = 'Success';
    data = await Award.findAndCountAll();
  } catch (error) {
    code = 400;
    status = 'Failed';
    message = 'Failed';
  } finally {
    return res.status(code).send({status, message, data});
  }
};
