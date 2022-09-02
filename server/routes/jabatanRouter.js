const router = require("express").Router()
const Controller = require("../controllers/Jabatan.js")

router.get('/', Controller.listJabatan)
router.get('/:JabatanId', Controller.detailJabatan)
router.post('/', Controller.addJabatan)
router.delete('/:JabatanId', Controller.deleteJabatan)
router.put('/:JabatanId', Controller.editJabatan)

module.exports = router