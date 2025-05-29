const taskControl = require('./control')
const express = require("express")
const route = express.Router()

route.post('/create',taskControl.create)
route.get('/getAll',taskControl.findAll)
route.put('/update/:id',taskControl.update)
route.delete('/delete/:id',taskControl.delete)
route.get('/getOne/:id',taskControl.findOne)

module.exports = route;

