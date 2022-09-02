const {
  Jabatan,
  Department,
  Karyawan
} = require("../models")

class Controller {
  static async listJabatan(req, res, next) {
    try {
      const data = await Jabatan.findAll({
        include : [Department]
      })
      res.status(200).json({
        status: true,
        data
      })
    } catch (error) {
      next(error)
    }
  }

  static async detailJabatan(req, res, next) {
    try {
      const data = await Jabatan.findOne({
        where : {
          id : req.params.JabatanId
        },
        include : [Department, Karyawan]
      })
      res.status(200).json({
        status: true,
        data
      })
      if(!data){
        throw {name : "notFound"}
      }
    } catch (error) {
      next(error)
    }
  }

  static async addJabatan(req, res, next) {
    try {
      const data = {
        id_department: req.body.id_department,
        nama_jabatan: req.body.nama_jabatan
      }
      const result = await Jabatan.create(data)
      res.status(201).json({
        status: true,
        message: `Sukses Menambahkan Data Dengan ID ${result.id}`
      })
    } catch (error) {
      next(error)
    }
  }

  static async deleteJabatan(req, res, next) {
    try {
      const result = await Jabatan.destroy({
        where: {
          id: req.params.JabatanId
        }
      })
      if(result === 0){
        throw {name : "notFound"}
      }
      res.status(200).json({
        status: true,
        message: `Sukses Menghapus Data Dengan ID ${req.params.JabatanId}`
      })
    } catch (error) {
      next(error)
    }
  }

  static async editJabatan(req, res, next) {
    try {
      const data = {
        id_department: req.body.id_department,
        nama_jabatan: req.body.nama_jabatan
      }
      const result = await Jabatan.update(data, {
        where: {
          id: req.params.JabatanId
        }
      })
      if(result[0] === 0){
        throw {name : "notFound"}
      }
      res.status(200).json({
        status: true,
        message: `Sukses Mengubah Data Dengan ID ${req.params.JabatanId}`
      })
    } catch (error) {
      next(error)

    }
  }
}

module.exports = Controller