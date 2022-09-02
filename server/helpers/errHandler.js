module.exports = (err, req, res, next) => {
  console.error(err)
  let message = err.message
  let statusCode = 500
  if(err.name === "notFound"){
    statusCode = 404
    message = "Data Tidak Ditemukan"
  }
  if(err.name === "SequelizeForeignKeyConstraintError"){
    statusCode = 400
    message = err.parent.detail
  }
  if(err.name === "SequelizeValidationError" || err.name === "SequelizeUniqueConstraintError"){
    statusCode = 400
    message = err.errors[0].message
  }
  res.status(statusCode).json({status : false, message})
}