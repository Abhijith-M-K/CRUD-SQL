const express = require("express");
const cameraNetworkController = require("../controller/networkController");

const router = express.Router();

router.get("/camera-networks", cameraNetworkController.getAllNetworks);
router.get("/camera-networks/:id", cameraNetworkController.getNetworkById);
router.post("/camera-networks", cameraNetworkController.createNetwork);
router.put("/camera-networks/:id", cameraNetworkController.updateNetwork);
router.delete("/camera-networks/:id", cameraNetworkController.deleteNetwork);

module.exports = router;
