'use strict';
const bcrypt = require('bcrypt');
module.exports = {
  async up (queryInterface) {
    const hash = await bcrypt.hash('123456', 10);
    await queryInterface.bulkInsert('Students', [{
      name: 'Rohit', email: 'rohit@test.com', password: hash,
      createdAt: new Date(), updatedAt: new Date()
    }], {});
  },
  async down (queryInterface) {
    await queryInterface.bulkDelete('Students', { email: 'rohit@test.com' }, {});
  }
};