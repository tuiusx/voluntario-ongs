//IMPORTAÇÕES
const express = require("express")
const routers = require("./src/routers")
const apiRouters = require("./src/apiRouters")
const bodyParser = require('body-parser')

//INSTÂCIA DO FRAMEWORK EXPRESS
const app= express()

//CONFIGURANDO CAMADA DE VISÃO
app.set("view engine", "html")
app.engine("html", require("hbs").__express)
app.set("views", __dirname + "/src/views")

// CONFIGURANDO CONTEÚDOS ESTÁTICOS
app.use(bodyParser.json())
app.use(express.static(__dirname + "/public"))

//CONFIGURAR O REQUEST BODY
app.use(bodyParser.urlencoded({ extended: true }))

//ROTAS DA APLICAÇÃO
app.use(routers)
app.use("/api", apiRouters)

//PORTA DO SERVIDOR
app.listen(3000, () => console.log("Servido on"))