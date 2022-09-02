const router = require("express").Router()
const Controller = require("../controllers/Department.js")

router.get('/', Controller.listDepartment)
router.get('/:departmentId', Controller.detailDepartment)
router.post('/', Controller.addDepartment)
router.delete('/:departmentId', Controller.deleteDepartment)
router.put('/:departmentId', Controller.editDepartment)

module.exports = router