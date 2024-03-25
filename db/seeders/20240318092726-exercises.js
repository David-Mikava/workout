'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Exercises',
      [
        {
          title: 'Jumping Muscle Up',
          parentId: 1,
          img: '/img/exercises/jumpingmuscleup.svg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Kipping Mucle Up',
          parentId: 1,
          img: '/img/exercises/kippingmucleup.svg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Muscle Up',
          parentId: 1,
          img: '/img/exercises/muscleup.svg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          title: 'Tuck Back Lever',
          parentId: 2,
          img: '/img/exercises/tuckbacklever.svg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Adv. Tuck Back Lever',
          parentId: 2,
          img: '/img/exercises/advtuckbacklever.svg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Strabble Back Lever',
          parentId: 2,
          img: '/img/exercises/strabblebacklever.svg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Back Lever',
          parentId: 2,
          img: '/img/exercises/exercisebacklever.svg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          title: 'Tuck L-Sit',
          parentId: 3,
          img: '/img/exercises/tucklsit.svg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'L-Sit',
          parentId: 3,
          img: '/img/exercises/lsit.svg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Tuck V-Sit',
          parentId: 3,
          img: '/img/exercises/tuckvsit.svg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'V-Sit',
          parentId: 3,
          img: '/img/exercises/vsit.svg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Vertical Flag',
          parentId: 4,
          img: '/img/exercises/verticalFlag.svg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Upside Down Flag',
          parentId: 4,
          img: '/img/exercises/upsideDownFlag.svg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Neg. Strabble Flag',
          parentId: 4,
          img: '/img/exercises/strabbleHumanFlag.svg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Strabble Human Flag',
          parentId: 4,
          img: '/img/exercises/strabbleHumanFlag.svg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Human Flag',
          parentId: 4,
          img: '/img/exercises/humanFlagLearn.svg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          title: 'Handstand',
          parentId: 5,
          img: '/img/exercises/handstandLearn.svg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          title: 'Wall Handstand Push Up',
          parentId: 6,
          img: '/img/exercises/wallhandstandpushup.svg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Neg. Handstand Push Up',
          parentId: 6,
          img: '/img/exercises/handstandpushup.svg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Handstand Push Up',
          parentId: 6,
          img: '/img/exercises/handstandpushup.svg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          title: 'Assisted One Arm Pull Up',
          parentId: 7,
          img: '/img/exercises/assistedonearmpullup.svg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Negative One Arm Pull Up',
          parentId: 7,
          img: '/img/exercises/negativeonearmpullup.svg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Little Assisted OAP',
          parentId: 7,
          img: '/img/exercises/littleassistedOAP.svg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'One Arm Pull Up',
          parentId: 7,
          img: '/img/exercises/exerciseonearmpullup.svg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          title: 'Adv. Tuck Front Lever',
          parentId: 8,
          img: '/img/exercises/advtuckfrontlever.svg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Strabble Half Front Lever',
          parentId: 8,
          img: '/img/exercises/strabblehalffrontlever.svg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Half Front Lever',
          parentId: 8,
          img: '/img/exercises/halffrontlever.svg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Strabble Front Lever',
          parentId: 8,
          img: '/img/exercises/strabefrontlever.svg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Front Lever',
          parentId: 8,
          img: '/img/exercises/frontlever.svg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          title: 'Tuck Planche',
          parentId: 11,
          img: '/img/exercises/tuckplanche.svg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Adv. Tuck Planche',
          parentId: 11,
          img: '/img/exercises/advtuckplanche.svg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Strabble Planche',
          parentId: 11,
          img: '/img/exercises/strabbleplanche.svg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Planche',
          parentId: 11,
          img: '/img/exercises/planche.svg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          title: 'Planche',
          parentId: 12,
          img: '/img/exercises/planche.svg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Exercises', null, {});
  },
};
