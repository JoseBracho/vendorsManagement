const { Router } = require("express");

const route = Router()

const {postDevices, getAllDevices} = require('../controllers/devices.constrollers')

route.post('/devices', postDevices)
route.get('/devices/all', getAllDevices)

module.exports = route;