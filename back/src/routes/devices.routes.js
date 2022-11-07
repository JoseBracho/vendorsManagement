const { Router } = require("express");

const route = Router()

const {postDevices, getAllDevices, getIdDevices, getIdDescription} = require('../controllers/devices.constrollers')

route.post('/devices', postDevices)
route.get('/devices/all', getAllDevices)
route.get('/devices/hostname', getIdDevices)

route.get('/description/ip', getIdDescription)

module.exports = route;