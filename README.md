# CRUD-SQL

Create REST APIs using expressJs that allows to perform CRUD operations on Camera entity, as well as do CRUD operations on "network of cameras"(CameraNetworks). The "networks of camera" will consist of "cameras" that can be mutually inclusive. On performing the delete operations on the camera table the CameraNetworks table should be updated accordingly.

_____________________________________________________________________
Create a new MySQL database and create two tables: cameras and camera_networks. 
_____________________________________________________________________
Create a new file called db.js and create a new MySQL connection
_____________________________________________________________________
Create a new files called cameraController.js and networkController.js and their routes
_____________________________________________________________________

Adding a camera file:

router post
Url for adding a file: http://localhost:3000/cameras

________________________________________
Get all camera files

router get
Get all file : http://localhost:3000/cameras
________________________________________

Get a camera file

router get
Get a file : http://localhost:3000/cameras/:id

_______________________________________

Update a file

router put
Update a file :http://localhost:3000/cameras/:id
_______________________________________

Remove a camera file
router delete

Remove a file : http://localhost:3000/cameras/:id





________________________________________
Adding a Network file:

router post
Url for adding a file: http://localhost:3000/camera-networks

________________________________________
Get all Network files

router get
Get all file : http://localhost:3000/camera-networks
________________________________________

Get a Network file

router get
Get a file : http://localhost:3000/camera-networks/:id

_______________________________________

Update a file

router put
Update a file :http://localhost:3000/camera-networks/:id
_______________________________________

Remove a Network file
router delete

Remove a file : http://localhost:3000/camera-networks/:id

