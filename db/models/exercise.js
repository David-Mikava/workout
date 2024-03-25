'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Exercise extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Skill, { foreignKey: 'parentId' });
      this.belongsToMany(models.Trainning, {
        through:"ExerciseTraining",
        foreignKey: 'exercisId',
        as: 'trainings',
      });
    }
  }
  Exercise.init(
    {
      title: DataTypes.STRING,
      parentId: DataTypes.INTEGER,
      img: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Exercise',
    },
  );
  return Exercise;
};
