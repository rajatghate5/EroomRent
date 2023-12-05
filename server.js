// Require Module
const express = require("express");
const multer = require("multer");
const path = require("path");
const BodyParser = require("body-parser");
const cors = require("cors");
const { MongoClient, ObjectId } = require("mongodb");

// Using data
const CONNECTION_URL = "mongodb://127.0.0.1:27017";
const DB_NAME = "eroomrent";
const app = express();
app.use(cors());
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
let db,
  collection1,
  collection2,
  collection3,
  collection4,
  collection5,
  collection6;

app.listen(5000, () => {
  const client = new MongoClient(CONNECTION_URL);
  client.connect();
  db = client.db(DB_NAME);
  collection1 = db.collection("registertenant");
  collection2 = db.collection("registerbroker");
  collection3 = db.collection("registerowner");
  collection4 = db.collection("properties");
  collection5 = db.collection("booking");
  collection6 = db.collection("locations");
  console.log(`Connected to ${DB_NAME}!`);
});

// User Data Start ------------------------------------------------------------------
// 1. Get Tenant Data
app.get("/tenantsignup", async (req, res) => {
  const result = await collection1.find({}).toArray();
  res.send(result);
});

// 2. Find Specific User Data
app.get("/tenantsignup/:id", async (req, res) => {
  const id1 = req.params.id; // Retrieve the "id" from the URL
  const objectId = new ObjectId(id1);
  let result = await collection1.findOne({ _id: objectId });
  res.send(result);
});

// 3. Set User Data
app.post("/tenantsignup", async (req, res) => {
  const { name, email, password, mobno, address } = req.body;
  const result = await collection1.insertOne({
    name,
    email,
    password,
    mobno,
    address,
  });
  if (result != null) {
    res.send({ status: "1", msg: "user signup success" });
  } else {
    res.send({ msg: "signup failed" });
  }
});

// 4. Find User Data
app.post("/tenantlogin", async (req, res) => {
  const { email, password } = req.body;
  let result = await collection1.findOne({
    email,
    password,
  });
  if (result != null) {
    res.send({
      status: "1",
      msg: "login success",
      id: result._id,
    });
  } else {
    res.send({ msg: "login failed" });
  }
});

// 5. Edit Specific User Data
app.patch("/tenantsignup/:id", async (req, res) => {
  const id1 = req.params.id; // Retrieve the "id" from the URL
  const { name, email, password, mobno, address } = req.body;
  const objectId = new ObjectId(id1);
  let result = await collection1.updateOne(
    { _id: objectId },
    {
      $set: {
        name,
        email,
        password,
        mobno,
        address,
      },
    }
  );
  res.send(result);
});

// User Data End ------------------------------------------------------------------

// Broker Data Start---------------------------------------------------------------
// 1. Get Broker Data
app.get("/brokersignup", async (req, res) => {
  const result = await collection2.find({}).toArray();
  res.send(result);
});

// 2.Find Specific Broker Data
app.get("/brokersignup/:id", async (req, res) => {
  const id2 = req.params.id; // Retrieve the "id" from the URL
  const objectId = new ObjectId(id2);
  let result = await collection2.findOne({ _id: objectId });
  res.send(result);
});

// 3.Set Broker Data
app.post("/brokersignup", async (req, res) => {
  const { name, email, password, mobno, address } = req.body;
  const result = await collection2.insertOne({
    name,
    email,
    password,
    mobno,
    address,
  });

  if (result != null) {
    res.send({ status: "1", msg: "broker signup success" });
  } else {
    res.send({ msg: "signup failed" });
  }
});

// 4.Find Broker Data
app.post("/brokerlogin", async (req, res) => {
  const { email, password } = req.body;
  let result = await collection2.findOne({
    email,
    password,
  });
  if (result != null) {
    res.send({
      status: "1",
      msg: "login success",
      id: result._id,
    });
  } else {
    res.send({ msg: "login failed" });
  }
});

// 5. Edit Specific User Data
app.patch("/brokersignup/:id", async (req, res) => {
  const id2 = req.params.id; // Retrieve the "id" from the URL
  const { name, email, password, mobno, address } = req.body;
  const objectId = new ObjectId(id2);
  let result = await collection2.updateOne(
    { _id: objectId },
    {
      $set: {
        name,
        email,
        password,
        mobno,
        address,
      },
    }
  );

  res.send(result);
});
// Broker Data End---------------------------------------------------------------

// Owner Data Start------------------------------------------------------------------
// 1. Get Owner Data
app.get("/ownersignup", async (req, res) => {
  const result = await collection3.find({}).toArray();
  res.send(result);
});

// 2. Find Specific Owner Data
app.get("/ownersignup/:id", async (req, res) => {
  const id3 = req.params.id; // Retrieve the "id" from the URL
  const objectId3 = new ObjectId(id3.toString());
  let result = await collection3.findOne({ _id: objectId3 });
  res.send(result);
});

// 3. Set Owner Data
app.post("/ownersignup", async (req, res) => {
  const { name, email, password, mobno, address } = req.body;
  const result = await collection3.insertOne({
    name,
    email,
    password,
    mobno,
    address,
  });
  if (result != null) {
    res.send({ status: "1", msg: "owner signup success" });
  } else {
    res.send({ msg: "signup failed" });
  }
});

// 4. Find Owner Data
app.post("/ownerlogin", async (req, res) => {
  const { email, password } = req.body;
  let result = await collection3.findOne({
    email,
    password,
  });
  if (result != null) {
    res.send({
      status: "1",
      msg: "login success",
      id: result._id,
    });
  } else {
    res.send({ msg: "login failed" });
  }
});

// 5. Edit Specific User Data
app.patch("/ownersignup/:id", async (req, res) => {
  const id3 = req.params.id; // Retrieve the "id" from the URL
  const { name, email, password, mobno, address } = req.body;
  const objectId = new ObjectId(id3);
  let result = await collection3.updateOne(
    { _id: objectId },
    {
      $set: {
        name,
        email,
        password,
        mobno,
        address,
      },
    }
  );
  res.send(result);
});

// Owner Data End--------------------------------------------------------------------------

// Locations Start ------------------------------------------------------------------------

app.get("/locations", async (req, res) => {
  const result = await collection6.findOne({ cityname: "indore" });
  if (result !== null) {
    res.send({ status: "ok", suggestions: result.cityareas });
  } else {
    res.send({ status: "not ok", msg: "locations is not found" });
  }
});

// Locations End --------------------------------------------------------------------------

// Post Your Property Start ---------------------------------------------------------------

// 1. Add Property Data
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images/property-img");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage });
// Single Image -------
// app.post("/property", upload.single("file"), async (req, res) => {
//   const {
//     name,
//     email,
//     mobile,
//     deposit,
//     rent,
//     area,
//     parking,
//     buildingAge,
//     balcony,
//     furnishing,
//     bathroom,
//     facing,
//     nonVegAllowed,
//     water,
//     security,
//     floor,
//     location,
//     tenantType,
//     availableDate,
//     propertyType,
//     subCategory,
//     description,
//   } = req.body;

//   const property = {
//     name,
//     email,
//     mobile,
//     deposit,
//     rent,
//     area,
//     parking,
//     buildingAge,
//     balcony,
//     furnishing,
//     bathroom,
//     facing,
//     nonVegAllowed,
//     water,
//     security,
//     floor,
//     location,
//     tenantType,
//     availableDate,
//     propertyType,
//     subCategory,
//     description,
//     imageUrl: req.file.filename,
//     postedDate: new Date().toISOString().slice(0, 10),
//   };

//   const result = await collection4.insertOne(property);
//   if (result != null) {
//     res.send({ status: "1", msg: "property is posted" });
//   } else {
//     res.send({ msg: "property is not posted" });
//   }
// });

// 2. Get Property Data

// Multiple Image ------

app.post("/property", upload.array("files", 5), async (req, res) => {
  const {
    name,
    email,
    mobile,
    deposit,
    rent,
    area,
    parking,
    buildingAge,
    balcony,
    furnishing,
    bathroom,
    facing,
    nonVegAllowed,
    water,
    security,
    floor,
    location,
    tenantType,
    availableDate,
    propertyType,
    subCategory,
    description,
  } = req.body;

  const files = req.files;

  const imageUrls = files.map((file) => file.filename);

  const property = {
    name,
    email,
    mobile,
    deposit,
    rent,
    area,
    parking,
    buildingAge,
    balcony,
    furnishing,
    bathroom,
    facing,
    nonVegAllowed,
    water,
    security,
    floor,
    location,
    tenantType,
    availableDate,
    propertyType,
    subCategory,
    description,
    imageUrls,
    postedDate: new Date().toISOString().slice(0, 10),
  };

  const result = await collection4.insertOne(property);
  if (result != null) {
    res.send({ status: "1", msg: "property is posted" });
  } else {
    res.send({ msg: "property is not posted" });
  }
});

app.get("/property", async (req, res) => {
  const result = await collection4.find().sort({ postedDate: -1 }).toArray();
  res.send(result);
});

app.get("/property/:id", async (req, res) => {
  const id3 = req.params.id; // Retrieve the "id" from the URL
  const objectId3 = new ObjectId(id3.toString());
  const result = await collection4.findOne({ _id: objectId3 });
  res.send(result);
});

app.put("/property/:id", upload.any(), async (req, res) => {
  console.log(req.params.id);
  const id3 = req.params.id; // Retrieve the "id" from the URL
  const objectId3 = new ObjectId(id3.toString());
  const previousData = await collection4.findOne({ _id: objectId3 });
  if (previousData !== null) {
    const imageUrls = previousData.imageUrls;
    const {
      name,
      email,
      mobile,
      deposit,
      rent,
      area,
      parking,
      buildingAge,
      balcony,
      furnishing,
      bathroom,
      facing,
      nonVegAllowed,
      water,
      security,
      floor,
      location,
      tenantType,
      availableDate,
      propertyType,
      subCategory,
      description,
    } = req.body;

    const files = req.files;
    const newImageUrls = files.map((file) => file.filename);

    for (let i = 0; i < newImageUrls.length; i++) {
      imageUrls.push(newImageUrls[i]);
    }
    const updatedData = {
      $set: {
        name,
        email,
        mobile,
        deposit,
        rent,
        area,
        parking,
        buildingAge,
        balcony,
        furnishing,
        bathroom,
        facing,
        nonVegAllowed,
        water,
        security,
        floor,
        location,
        tenantType,
        availableDate,
        propertyType,
        subCategory,
        description,
        imageUrls,
        postedDate: new Date().toISOString().slice(0, 10),
      },
    };

    const result = await collection4.updateOne({ _id: objectId3 }, updatedData);
    if (result != null) {
      res.send({ status: "1", msg: "property is updated" });
    } else {
      res.send({ msg: "property is not updated" });
    }
  }
});

app.delete("/property/:id", async (req, res) => {
  const id3 = req.params.id; // Retrieve the "id" from the URL
  const objectId3 = new ObjectId(id3.toString());
  const result = await collection4.deleteOne({ _id: objectId3 });
  if (result !== null) {
    res.send({ status: "1", msg: "Delete Successful" });
  } else {
    res.send({ msg: "Delete Unsuccessful" });
  }
});

// User Posted Property list
app.get("/postedproperty/:id", async (req, res) => {
  const id3 = req.params.id; // Retrieve the "id" from the URL
  const objectId3 = new ObjectId(id3.toString());
  const ownerData = await collection3.findOne({ _id: objectId3 });
  const brokerData = await collection2.findOne({ _id: objectId3 });
  console.log(ownerData ? ownerData.email : "Owner data not found");
  console.log(brokerData ? brokerData.email : "Broker data not found");
  if (ownerData !== null) {
    let result = await collection4.find({ email: ownerData.email }).toArray();
    res.send(result);
  } else if (brokerData.email !== null) {
    let result = await collection4.find({ email: brokerData.email }).toArray();
    res.send(result);
  } else {
    res.send("Data Not Found");
  }
});

app.get("/booking", async (req, res) => {
  let result = await collection5.find({}).toArray();
  res.send(result);
});

app.post("/booking", async (req, res) => {
  const { propertyId, tenantId } = req.body;
  console.log(propertyId, tenantId);
  let bookingDate = new Date().toISOString().slice(0, 10);
  try {
    // Use findOne to check for existence
    let matchData = await collection5.findOne({ propertyId });
    console.log("Matched Data", matchData);

    if (matchData === null) {
      // If no match, insert the document
      const result = await collection5.insertOne({
        propertyId,
        tenantId,
        bookingDate,
      });

      if (result !== null) {
        // Document successfully inserted
        res.send({ status: "1", msg: "Booking Confirmed" });
      } else {
        // Insert failed
        res.send({ status: "0", msg: "Booking Not Confirmed" });
      }
    } else {
      // Document already exists
      res.send({ status: "2", msg: "You already booked it" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send({ msg: "Internal Server Error" });
  }
});

// Post Your Property End ------------------------------------------------------------------
