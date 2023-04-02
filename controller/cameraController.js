const db = require("../config/db");

const cameraController = {};

cameraController.getAllCameras = async (req, res) => {
  const cameras = await db("cameras").select("*");
  res.json(cameras);
};

cameraController.getCameraById = async (req, res) => {
  const { id } = req.params;
  const camera = await db("cameras").where({ id }).first();
  if (camera) {
    res.json(camera);
  } else {
    res.status(404).json({ message: "Camera not found" });
  }
};

cameraController.createCamera = async (req, res) => {
  const { name, description, resolution, price } = req.body;
  const [id] = await db("cameras").insert({
    name,
    description,
    resolution,
    price,
  });
  const camera = await db("cameras").where({ id }).first();
  res.json(camera);
};

cameraController.updateCamera = async (req, res) => {
  const { id } = req.params;
  const { name, description, resolution, price } = req.body;
  await db("cameras")
    .where({ id })
    .update({ name, description, resolution, price });
  const camera = await db("cameras").where({ id }).first();
  res.json(camera);
};

cameraController.deleteCamera = async (req, res) => {
  const { id } = req.params;
  const camera = await db("cameras").where({ id }).first();
  if (camera) {
    await db("cameras").where({ id }).del();
    // Update camera_networks table
    await db("camera_networks")
      .where("cameras", "like", `%${id}%`)
      .update({ cameras: db.raw(`REPLACE(cameras, '${id},', '')`) });
    res.json(camera);
  } else {
    res.status(404).json({ message: "Camera not found" });
  }
};

module.exports = cameraController;
