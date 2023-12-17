const express = require("express");
const multer = require("multer");
const path = require("path");
const BodyParser = require("body-parser");
const cors = require("cors");
const { MongoClient, ObjectId } = require("mongodb");
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
  collection6,
  collection7;

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
  collection7 = db.collection("adminlogin");
  console.log(`Connected to ${DB_NAME}!`);
});

// --------------------------------------  User Data Start ---------------------------------------------------------
// 1. Get Tenant Data
app.get("/tenantsignup", async (req, res) => {
  const result = await collection1.find({}).toArray();
  res.send(result);
});

// 2. Find Specific Tenant Data
app.get("/tenantsignup/:id", async (req, res) => {
  const id1 = req.params.id; // Retrieve the "id" from the URL
  const objectId = new ObjectId(id1);
  let result = await collection1.findOne({ _id: objectId });
  res.send(result);
});

// 3. Set Tenant Data
app.post("/tenantsignup", async (req, res) => {
  const { name, email, password, mobno, address } = req.body;
  const matchData = await collection1.findOne({ email });
  if (matchData === null) {
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
  } else {
    res.send({ status: "0", msg: "User Already Exist" });
  }
});

// 4. Find Tenant Data
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

// 5. Edit Specific Tenant Data
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

// 6. Delete Specific Tenant Data
app.delete("/tenantsignup/:id", async (req, res) => {
  const id1 = req.params.id; // Retrieve the "id" from the URL
  const objectId = new ObjectId(id1);
  let result = await collection1.deleteOne({ _id: objectId });
  if (result !== null) {
    res.send({ status: "1", msg: "Delete Successful" });
  } else {
    res.send({ msg: "Delete Unsuccessful" });
  }
});

// 7. Forgotten Password
app.post("/tenantforgotten", async (req, res) => {
  const { email } = req.body;
  let result = await collection1.findOne({
    email,
  });
  if (result != null) {
    res.send({
      status: "1",
      msg: "Data Found",
      info: result,
    });
  } else {
    res.send({ msg: "Data Not Found" });
  }
});

// 8. Set New Password
app.put("/settenantpassword", async (req, res) => {
  const { email, password } = req.body;
  let result = await collection1.findOneAndUpdate(
    { email },
    { $set: { password } }
  );
  if (result != null) {
    res.send({
      status: "1",
      msg: "Data Updated",
    });
  } else {
    res.send({ msg: "Data Not Found" });
  }
});

// ------------------------------- User Data End ------------------------------------------------------------------

// ------------------------------- Broker Data Start---------------------------------------------------------------
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
  const matchData = await collection2.findOne({ email });
  if (matchData === null) {
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
  } else {
    res.send({ status: "0", msg: "User Already Exist" });
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

// 5. Edit Specific Broker Data
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

// 6. Delete Specific Broker Data
app.delete("/brokersignup/:id", async (req, res) => {
  const id1 = req.params.id; // Retrieve the "id" from the URL
  const objectId = new ObjectId(id1);
  let result = await collection2.deleteOne({ _id: objectId });
  if (result !== null) {
    res.send({ status: "1", msg: "Delete Successful" });
  } else {
    res.send({ msg: "Delete Unsuccessful" });
  }
});

// 7. Forgotten Password
app.post("/brokerforgotten", async (req, res) => {
  const { email } = req.body;
  let result = await collection2.findOne({
    email,
  });
  if (result != null) {
    res.send({
      status: "1",
      msg: "Data Found",
      info: result,
    });
  } else {
    res.send({ msg: "Data Not Found" });
  }
});

// 8. Set New Password
app.put("/setbrokerpassword", async (req, res) => {
  const { email, password } = req.body;
  let result = await collection2.findOneAndUpdate(
    { email },
    { $set: { password } }
  );
  if (result != null) {
    res.send({
      status: "1",
      msg: "Data Updated",
    });
  } else {
    res.send({ msg: "Data Not Found" });
  }
});

// ----------------------------------- Broker Data End---------------------------------------------------------------

// ----------------------------------- Owner Data Start------------------------------------------------------------------
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
  const matchData = await collection3.findOne({ email });
  if (matchData === null) {
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
  } else {
    res.send({ status: "0", msg: "User Already Exist" });
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

// 5. Edit Specific Owner Data
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

// 6. Delete  Specific Owner Data
app.delete("/ownersignup/:id", async (req, res) => {
  const id1 = req.params.id; // Retrieve the "id" from the URL
  const objectId = new ObjectId(id1);
  let result = await collection3.deleteOne({ _id: objectId });
  if (result !== null) {
    res.send({ status: "1", msg: "Delete Successful" });
  } else {
    res.send({ msg: "Delete Unsuccessful" });
  }
});

// 7. Forgotten Password
app.post("/ownerforgotten", async (req, res) => {
  const { email } = req.body;
  let result = await collection2.findOne({
    email,
  });
  if (result != null) {
    res.send({
      status: "1",
      msg: "Data Found",
      info: result,
    });
  } else {
    res.send({ msg: "Data Not Found" });
  }
});

// 8. Set New Password
app.put("/setownerpassword", async (req, res) => {
  const { email, password } = req.body;
  let result = await collection2.findOneAndUpdate(
    { email },
    { $set: { password } }
  );
  if (result != null) {
    res.send({
      status: "1",
      msg: "Data Updated",
    });
  } else {
    res.send({ msg: "Data Not Found" });
  }
});

// -------------------------------- Owner Data End--------------------------------------------------------------------------

// --------------------------------- Admin Login Start ---------------------------------------------------------------------

app.get("/adminlogin/:id", async (req, res) => {
  const id3 = req.params.id; // Retrieve the "id" from the URL
  const objectId3 = new ObjectId(id3.toString());
  const result = await collection7.findOne({ _id: objectId3 });
  res.send(result);
});

app.post("/adminlogin", async (req, res) => {
  const { email, password } = req.body;
  const result = await collection7.findOne({ email, password });
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

// --------------------------------- Admin Login End ---------------------------------------------------------------------

// --------------------------------- Locations Start ------------------------------------------------------------------------

app.get("/locations", async (req, res) => {
  const result = await collection6.findOne({ cityname: "indore" });
  if (result !== null) {
    res.send({ status: "ok", suggestions: result.cityareas });
  } else {
    res.send({ status: "not ok", msg: "locations is not found" });
  }
});

app.patch("/locations", async (req, res) => {
  const { newData } = req.body;
  const result = await collection6.updateOne(
    { cityname: "indore" },
    { $addToSet: { cityareas: newData } }
  );
  if (result.modifiedCount > 0) {
    res.send({ status: "1", msg: "Location added" });
  } else {
    res.send({ msg: "Location not added" });
  }
});

// --------------------------------- Locations End --------------------------------------------------------------------------

// --------------------------------- Post Your Property Start ---------------------------------------------------------------

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
    address,
    pincode,
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
    address,
    pincode,
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

// 2. Get All Properties
app.get("/property", async (req, res) => {
  const result = await collection4.find().sort({ postedDate: -1 }).toArray();
  res.send(result);
});

// 3. Find Requested Property
app.get("/getproperty", async (req, res) => {
  const numberOfKeys = Object.keys(req.query).length;
  if (numberOfKeys <= 2) {
    const { location, propertyType } = req.query;
    const result = await collection4.find({ location, propertyType }).toArray();
    res.send(result);
  } else {
    const { location, propertyType, subCategory } = req.query;
    const result = await collection4
      .find({ location, propertyType, subCategory })
      .toArray();
    res.send(result);
  }
});

// 4. Find Specific Requested Property
app.get("/property/:id", async (req, res) => {
  const id3 = req.params.id; // Retrieve the "id" from the URL
  const objectId3 = new ObjectId(id3.toString());
  const result = await collection4.findOne({ _id: objectId3 });
  res.send(result);
});

// 5. Edit Specific Property
app.put("/property/:id", upload.any(), async (req, res) => {
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
      address,
      pincode,
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
        address,
        pincode,
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

// 6. Delete Specific Property
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

// 7. User Posted Property list
app.get("/postedproperty/:id", async (req, res) => {
  const id3 = req.params.id; // Retrieve the "id" from the URL
  const objectId3 = new ObjectId(id3.toString());
  const ownerData = await collection3.findOne({ _id: objectId3 });
  const brokerData = await collection2.findOne({ _id: objectId3 });
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

// ------------------------------- Post Your Property End ------------------------------------------------------------------

// ------------------------------- Booking of the property Start -------------------------------------------------------------

// 1. Get all bookings
app.get("/booking", async (req, res) => {
  let result = await collection5.find({}).toArray();
  res.send(result);
});

// 2. Add Booking
app.post("/booking", async (req, res) => {
  const { propertyID, tenantID } = req.body;
  const propertyId = new ObjectId(propertyID.toString());
  const tenantId = new ObjectId(tenantID.toString());
  const propertyData = await collection4.findOne({ _id: propertyId });
  let bookerData = await collection1.findOne({ _id: tenantId });
  if (!bookerData) {
    bookerData = await collection7.findOne({ _id: tenantId });
  }
  let bookingDate = new Date().toISOString().slice(0, 10);
  try {
    // Use findOne to check for existence
    let matchData = await collection5.findOne({
      "propertyData._id": propertyId,
    });
    if (matchData === null) {
      // If no match, insert the document
      const result = await collection5.insertOne({
        propertyData,
        bookerData,
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

// 3. Delete Booking
app.delete("/booking/:id", async (req, res) => {
  const id3 = req.params.id; // Retrieve the "id" from the URL
  const objectId3 = new ObjectId(id3.toString());
  const result = await collection5.deleteOne({ _id: objectId3 });
  if (result !== null) {
    res.send({ status: "1", msg: "Delete Successful" });
  } else {
    res.send({ msg: "Delete Unsuccessful" });
  }
});

// -------------------------------- Booking of the property End ---------------------------------------------------------------
