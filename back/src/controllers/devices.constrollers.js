const { getData } = require("../config/fetchCLient");
const { allDevices, idDevices, idDescriptions } = require("../config/query");

postDevices = async (req, res) => {
  const { hostname, os, connection, drive } = req.body;
  res.status(200).json({
    hostname,
    os,
    connection,
    drive,
  });
};

getAllDevices = async (req, res) => {
  const query = allDevices();
  const data = await getData(query);
  if (data != "") {
    res.status(200).json({
      done: true,
      data,
    });
  } else {
    res.status(500).json({
      done: false,
      msg: "Server Error",
    });
  }
};

getIdDevices = async (req, res) => {
  const {hostname} = req.body;
  const query = idDevices(hostname);
  const data = await getData(query);
  if (data != "") {
    res.status(200).json({
      done: true,
      data,
    });
  } else {
    res.status(500).json({
      done: false,
      msg: "Server Error",
    });
  }
};

getIdDescription = async (req, res) => {
  const {ip} = req.body;
  const query = idDescriptions(ip)
  const data = await getData(query);
  if (data != "") {
    res.status(200).json({
      done: true,
      data,
    });
  } else {
    res.status(500).json({
      done: false,
      msg: "Server Error",
    });
  } 
}

module.exports = {
  postDevices,
  getAllDevices,
  getIdDevices,
  getIdDescription 
};
