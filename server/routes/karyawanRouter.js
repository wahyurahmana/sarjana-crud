const router = require("express").Router()
const Controller = require("../controllers/Karyawan.js")

router.get('/', Controller.listKaryawan)
router.get('/:KaryawanId', Controller.detailKaryawan)
router.post('/', Controller.addKaryawan)
router.delete('/:KaryawanId', Controller.deleteKaryawan)
router.put('/:KaryawanId', Controller.editKaryawan)

module.exports = router