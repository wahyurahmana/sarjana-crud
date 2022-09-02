'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Department extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Department.hasMany(models.Jabatan, {foreignKey : 'id_department'})
    }
  }
  Department.init({
    nama_department: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notEmpty: {
          msg : "Nama Department Tidak Boleh Kosong"
        },
        notNull : {
          msg : "Nama Department Tidak Boleh Kosong"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Department',
  });
  return Department;
};