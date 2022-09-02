const express = require("express")
const cors = require("cors")
const allRoute = require("./routes/index.js")
const errHandler = require("./helpers/errHandler.js")

const PORT = 5000
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use(allRoute)

app.use(errHandler)

app.listen(PORT, () => console.log("Server Running On Port "+PORT))