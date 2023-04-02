const db = require("../config/db");

const cameraNetworkController = {};

cameraNetworkController.getAllNetworks = async (req, res) => {
  const networks = await db("camera_networks").select("*");
  res.json(networks);
};

cameraNetworkController.getNetworkById = async (req, res) => {
  const { id } = req.params;
  const network = await db("camera_networks").where({ id }).first();
  if (network) {
    res.json(network);
  } else {
    res.status(404).json({ message: "Camera network not found" });
  }
};

cameraNetworkController.createNetwork = async (req, res) => {
  const { name, cameras } = req.body;
  const [id] = await db("camera_networks").insert({ name, cameras });
  const network = await db("camera_networks").where({ id }).first();
  res.json(network);
};

cameraNetworkController.updateNetwork = async (req, res) => {
  const { id } = req.params;
  const { name, cameras } = req.body;
  await db("camera_networks").where({ id }).update({ name, cameras });
  const network = await db("camera_networks").where({ id }).first();
  res.json(network);
};

cameraNetworkController.deleteNetwork = async (req, res) => {
  const { id } = req.params;
  const network = await db("camera_networks").where({ id }).first();
  if (network) {
    await db("camera_networks").where({ id }).del();
    res.json({ message: "Camera network deleted successfully" });
  } else {
    res.status(404).json({ message: "Camera network not found" });
  }
};

module.exports = cameraNetworkController;
