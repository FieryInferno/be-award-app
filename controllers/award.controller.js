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
    const {limit, page} = req.query;
    const dataAward = await Award.findAndCountAll({
      limit,
      offset: limit * page,
    });

    data = {
      page: +page,
      limit: +limit,
      count: dataAward.rows.length,
      total: dataAward.count,
      rows: dataAward.rows,
    };
  } catch (error) {
    code = 400;
    status = 'Failed';
    message = 'Failed';
  } finally {
    return res.status(code).send({status, message, data});
  }
};
