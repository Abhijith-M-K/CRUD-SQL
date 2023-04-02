const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const cameraRoutes = require("./routes/cameraRoutes");
const cameraNetworkRoutes = require("./routes/networkRoutes");
dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/api", cameraRoutes);
app.use("/api", cameraNetworkRoutes);

const port = 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
