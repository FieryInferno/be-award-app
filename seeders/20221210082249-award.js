'use strict';

/** @type {import('sequelize-cli').Migration} */

const uuid = require('uuid');
module.exports = {
  async up(queryInterface, Sequelize) {
    const awards = [];
    const type = ['Vouchers', 'Products', 'Giftcards'];
    const image = ['1.jpg', '2.jpg', '3.jpg'];

    for (let index = 0; index < 150; index++) {
      const random = Math.floor(Math.random() * type.length);
      const point = Math.floor(Math.random() * (500000 - 10000 + 1) + 10000);

      awards.push({
        id: uuid.v4(),
        type: type[random],
        point: point,
        name: type[random] + ' IDR ' + point,
        image: image[random],
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    await queryInterface.bulkInsert('Awards', awards, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Awards', null, {});
  },
};
