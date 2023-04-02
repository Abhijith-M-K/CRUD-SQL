const express = require("express");
const router = express.Router();
const cameraController = require("../controller/cameraController");

router.get("/cameras", cameraController.getAllCameras);
router.get("/cameras/:id", cameraController.getCameraById);
router.post("/cameras", cameraController.createCamera);
router.put("/cameras/:id", cameraController.updateCamera);
router.delete("/cameras/:id", cameraController.deleteCamera);

module.exports = router;
