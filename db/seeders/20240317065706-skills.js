'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Skills',
      [
        {
          title: 'Muscle Up',
          img: '/img/skills/muscleup.svg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Back Lever',
          img: '/img/skills/backlever.svg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'V-Sit',
          img: '/img/skills/vsit.svg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Human Flag',
          img: '/img/skills/humanflag.svg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Handstand',
          img: '/img/skills/handstand.svg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Handstand Push Up',
          img: '/img/skills/handstandpushup.svg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'One Arm Pull Up',
          img: '/img/skills/onearmpullup.svg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Front Lever',
          img: '/img/skills/frontlever.svg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Divan',
          img: '/img/skills/divan.svg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'One Arm Handstand',
          img: '/img/skills/onearmhandstand.svg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Planche',
          img: '/img/skills/planche.svg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Maltese Planche',
          img: '/img/skills/maltese.svg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('skills', null, {});
  },
};
