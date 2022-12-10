const {get} = require('../controllers/award.controller');
const {verifyToken} = require('../middleware');

module.exports = (app) => {
  app.get('/api/awards', [verifyToken], get);
};
