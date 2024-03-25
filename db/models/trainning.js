'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Trainning extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Exercise, {
        through: "ExerciseTraining",
        foreignKey: 'treningId',
        as: 'exercises',
      });
    }
  }
  Trainning.init(
    {
      name: DataTypes.STRING,
      video: DataTypes.STRING,
      purpose: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Trainning',
    },
  );
  return Trainning;
};
