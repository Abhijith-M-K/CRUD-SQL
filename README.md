# CRUD-SQL

Create REST APIs using expressJs that allows to perform CRUD operations on Camera entity, as well as do CRUD operations on "network of cameras"(CameraNetworks). The "networks of camera" will consist of "cameras" that can be mutually inclusive. On performing the delete operations on the camera table the CameraNetworks table should be updated accordingly.

Technologies used: Node.js,express.js,SQL,Postman,Thunder client


_____________________________________________________________________

Adding a camera file:

router post
Url for adding a file:
```http
POST  http://localhost:3000/cameras
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `name` | `string` | *Required* |
| `description` | `string` | *Required* |
| `resolution` | `string` | *Required* |
| `price` | `string` | *Required* |

________________________________________
Get all camera files

router get
Get all file :
```http
GET  http://localhost:3000/cameras
```
________________________________________

Get a camera file

router get
Get a file : 
```http
GET  http://localhost:3000/cameras/:id
```

_______________________________________

Update a file

router put
Update a file :
```http
PUT  http://localhost:3000/cameras/:id
```
_______________________________________

Remove a camera file
router delete

Remove a file : 
```http
DELETE  http://localhost:3000/cameras/:id
```





________________________________________
Adding a Network file:

router post
Url for adding a file: 
```http
POST http://localhost:3000/camera-networks
```


| Parameter | Type | Description |
| :--- | :--- | :--- |
| `name` | `string` | *Required* |
| `camera` | `string` | *Required* |

________________________________________
Get all Network files

router get
Get all file : 
```http
GET http://localhost:3000/camera-networks
```
________________________________________

Get a Network file

router get
Get a file : 
```http
GET http://localhost:3000/camera-networks/:id
```

_______________________________________

Update a file

router put
Update a file :
```http
PUT http://localhost:3000/camera-networks/:id
```
_______________________________________

Remove a Network file
router delete

Remove a file :
```http
DELETE http://localhost:3000/camera-networks/:id
```

























