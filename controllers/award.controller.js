const {Op} = require('sequelize');
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
    const {limit, page, poin, type} = req.query;
    const param = {};

    if (poin) param.where = {point: {[Op.between]: [1000, +poin]}};
    if (
      type &&
      !type.includes('All Type') &&
      !type.includes('Others')
    ) param.where.type = {[Op.in]: Array.isArray(type) ? type : [type]};
    if (
      type &&
      !type.includes('All Type') &&
      type.includes('Others')
    ) param.where.type = {[Op.in]: ['Giftcards']};

    const dataAward = await Award.findAndCountAll({
      limit,
      offset: limit * page,
      ...param,
    });

    data = {
      page: +page,
      limit: +limit,
      count: dataAward.rows.length,
      total: dataAward.count,
      rows: dataAward.rows,
    };
  } catch (error) {
    console.log(error);
    code = 400;
    status = 'Failed';
    message = 'Failed';
  } finally {
    return res.status(code).send({status, message, data});
  }
};
