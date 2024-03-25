'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ExerciseTrainings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      treningId: {
        type: Sequelize.INTEGER,
        references: {
          model: { tableName: 'Trainnings' },
          key: 'id',
        },
      },
      exercisId: {
        type: Sequelize.INTEGER,
        references: {
          model: { tableName: 'Exercises' },
          key: 'id',
        },
      },
      userResult: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ExerciseTrainings');
  },
};
