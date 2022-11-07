const allDevices = () => {
    return `SELECT * from devices;`
}

const idDevices = (hostname) => {
    return `SELECT * from devices WHERE hostname='${hostname}';`
}

const idDescriptions = (ip) => {
    return `SELECT * from descriptions  WHERE ip='${ip}';`
}

module.exports = {
    allDevices,
    idDevices,
    idDescriptions
}