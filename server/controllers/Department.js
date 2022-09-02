const {
  Department,
  Jabatan
} = require("../models")

class Controller {
  static async listDepartment(req, res, next) {
    try {
      const data = await Department.findAll({
        include : [Jabatan]
      })
      res.status(200).json({
        status: true,
        data
      })
    } catch (error) {
      next(error)
    }
  }

  static async detailDepartment(req, res, next) {
    try {
      const data = await Department.findOne({
        where : {
          id : req.params.departmentId
        },
        include : [Jabatan]
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

  static async addDepartment(req, res, next) {
    try {
      const data = {
        nama_department: req.body.nama_department
      }
      const result = await Department.create(data)
      res.status(201).json({
        status: true,
        message: `Sukses Menambahkan Data Dengan ID ${result.id}`
      })
    } catch (error) {
      next(error)
    }
  }

  static async deleteDepartment(req, res, next) {
    try {
      const result = await Department.destroy({
        where: {
          id: req.params.departmentId
        }
      })
      if(result === 0){
        throw {name : "notFound"}
      }
      res.status(200).json({
        status: true,
        message: `Sukses Menghapus Data Dengan ID ${req.params.departmentId}`
      })
    } catch (error) {
      next(error)
    }
  }

  static async editDepartment(req, res, next) {
    try {
      const data = {
        nama_department: req.body.nama_department
      }
      const result = await Department.update(data, {
        where: {
          id: req.params.departmentId
        }
      })
      if(result[0] === 0){
        throw {name : "notFound"}
      }
      res.status(200).json({
        status: true,
        message: `Sukses Mengubah Data Dengan ID ${req.params.departmentId}`
      })
    } catch (error) {
      next(error)

    }
  }
}

module.exports = Controller