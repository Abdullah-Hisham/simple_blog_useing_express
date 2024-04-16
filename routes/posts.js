const express = require('express')
const controller =require("../controllers/post")
const route =express.Router()
const validate = require("../middlewares/validation/post")



//
route.get("/",controller.getAll)
//
route.get('/:id',validate.getOne,controller.getOne)
//
route.delete('/:id',validate.deleteOne,controller.delteOne)
//
route.patch('/:id',validate.updateOne,controller.updateOne)
//
module.exports = route