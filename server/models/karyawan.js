'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Karyawan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Karyawan.belongsTo(models.Jabatan, {foreignKey : "id_jabatan"})
    }
  }
  Karyawan.init({
    id_jabatan: DataTypes.INTEGER,
    name: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notEmpty: {
          msg : "Nama Tidak Boleh Kosong"
        },
        notNull : {
          msg : "Nama Tidak Boleh Kosong"
        }
      }
    },
    age: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    tanggal_lahir: DataTypes.DATE,
    alamat: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notEmpty: {
          msg : "Alamat Tidak Boleh Kosong"
        },
        notNull : {
          msg : "Alamat Tidak Boleh Kosong"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Karyawan',
  });
  return Karyawan;
};