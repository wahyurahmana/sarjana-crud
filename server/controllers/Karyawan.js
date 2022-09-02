const {
  Karyawan,
  Jabatan,
  Department
} = require("../models")

class Controller {
  static async listKaryawan(req, res, next) {
    try {
      const data = await Karyawan.findAll({
        include :[{
          model : Jabatan,
          include : Department
        }]
      })
      res.status(200).json({
        status: true,
        data
      })
    } catch (error) {
      next(error)
    }
  }

  static async detailKaryawan(req, res, next) {
    try {
      const data = await Karyawan.findOne({
        where : {
          id : req.params.KaryawanId
        },
        include :[{
          model : Jabatan,
          include : Department
        }]
      })
      if(!data){
        throw {name : "notFound"}
      }
      res.status(200).json({
        status: true,
        data
      })
    } catch (error) {
      next(error)
    }
  }

  static async addKaryawan(req, res, next) {
    try {
      const data = {
        id_jabatan: req.body.id_jabatan,
        age: req.body.age,
        name: req.body.name,
        gender: req.body.gender,
        tanggal_lahir: req.body.tanggal_lahir,
        alamat: req.body.alamat
      }
      const result = await Karyawan.create(data)
      res.status(201).json({
        status: true,
        message: `Sukses Menambahkan Data Dengan ID ${result.id}`
      })
    } catch (error) {
      next(error)
    }
  }

  static async deleteKaryawan(req, res, next) {
    try {
      const result = await Karyawan.destroy({
        where: {
          id: req.params.KaryawanId
        }
      })
      if(result === 0){
        throw {name : "notFound"}
      }
      res.status(200).json({
        status: true,
        message: `Sukses Menghapus Data Dengan ID ${req.params.KaryawanId}`
      })
    } catch (error) {
      next(error)
    }
  }

  static async editKaryawan(req, res, next) {
    try {
      const data = {
        id_jabatan: req.body.id_jabatan,
        age: req.body.age,
        gender: req.body.gender,
        tanggal_lahir: req.body.tanggal_lahir,
        alamat: req.body.alamat,
        name: req.body.name,
      }
      const result = await Karyawan.update(data, {
        where: {
          id: req.params.KaryawanId
        }
      })
      if(result[0] === 0){
        throw {name : "notFound"}
      }
      res.status(200).json({
        status: true,
        message: `Sukses Mengubah Data Dengan ID ${req.params.KaryawanId}`
      })
    } catch (error) {
      next(error)

    }
  }
}

module.exports = Controller