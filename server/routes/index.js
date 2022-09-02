const router = require("express").Router()
const departmentRouter = require("./departmentRouter.js")
const jabatanRouter = require("./jabatanRouter.js")
const karyawanRouter = require("./karyawanRouter.js")

router.get('/', (req, res) => res.json({status : true, message : "Hello World"}))

router.use("/departments", departmentRouter)
router.use("/jabatan",jabatanRouter)
router.use("/karyawan",karyawanRouter)

module.exports = router