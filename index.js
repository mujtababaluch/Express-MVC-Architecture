const express =  require("express")
const  app = express()
const connectdb = require('./config/db_config')
const routes = require("./routes/central_routes")

app.use(express.json())

app.use("/api",routes)


connectdb()
const port = 3000

app.listen(port,()=>{
    console.log("http://localhost:3000")
})