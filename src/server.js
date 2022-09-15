const { urlencoded } = require("express")
const express = require("express")
const server = express()
const routes = require("./routes")
const path  = require("path")


// usando template engine
server.set('view engine',  'ejs')

server.set("views", path.join(__dirname, "views"))

//reqbody
server.use(express.urlencoded({extended: true}))
//habilitar arquivos statics
server.use(express.static("public"))

// routes
server.use(routes)



server.listen(3000, () => console.log('rodando'))