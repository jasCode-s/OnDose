const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// require database connection
const dbConnect = require("./db/conn");

const User = require("./db/userModel");
const Allergy = require("./db/allergyModel");
const Medication = require("./db/medicationModel");
const auth = require("./db/auth");

// execute database connection
dbConnect();

// Curb Cores Error by adding a header here
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
});  

// body parser configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (request, response, next) => {
  response.json({ message: "Hey! This is your server response!" });
  next();
});

// register endpoint
app.post("/register", (request, response) => {
  // hash the password
  bcrypt
    .hash(request.body.password, 10)
    .then((hashedPassword) => {
      // create a new user instance and collect the data
      const user = new User({
        username: request.body.username,
        email: request.body.email,
        password: hashedPassword,
      });

      // save the new user
      user
        .save()
        // return success if the new user is added to the database successfully
        .then((result) => {
          response.status(201).send({
            message: "User Created Successfully",
            result,
          });
        })
        // catch erroe if the new user wasn't added successfully to the database
        .catch((error) => {
          response.status(500).send({
            message: "Error creating user",
            error,
          });
        });
    })
    // catch error if the password hash isn't successful
    .catch((e) => {
      response.status(500).send({
        message: "Password was not hashed successfully",
        e,
      });
    });
});

// login endpoint
app.post("/login", (request, response) => {
  // check if username exists
  User.findOne({username: request.body.username })

    // if username exists
    .then((user) => {
      // compare the password entered and the hashed password found
      bcrypt
        .compare(request.body.password, user.password)

        // if the passwords match
        .then((passwordCheck) => {

          // check if password matches
          if(!passwordCheck) {
            return response.status(400).send({
              message: "Passwords does not match",
              error,
            });
          }

          //   create JWT token
          const token = jwt.sign(
            {
              userId: user._id,
              userName: user.username,
            },
            "RANDOM-TOKEN",
            { expiresIn: "24h" }
          );

          //   return success response
          response.status(200).send({
            message: "Login Successful",
            username: user.username,
            token,
          });
        })
        // catch error if password do not match
        .catch((error) => {
          response.status(400).send({
            message: "Passwords does not match",
            error,
          });
        });
    })
    // catch error if email does not exist
    .catch((e) => {
      response.status(404).send({
        message: "Username not found",
        e,
      });
    });
});

app.post("/add-medication", (request, response) => {
    const medication = new Medication({
        name: request.body.name,
        dosage: request.body.dosage,
        frequency: request.body.frequency,
        when: request.body.when,
        pill_count: Number(request.body.pill_count),
    })
    medication
        .save()
        // return success if the new user is added to the database successfully
        .then((result) => {
          response.status(201).send({
            message: "Medication Created Successfully",
            result,
          });
        })
        // catch erroe if the new user wasn't added successfully to the database
        .catch((error) => {
          response.status(500).send({
            message: "Error creating medication",
            error,
          });
        });
});

app.post("/add-allergy", (request, response) => {
    const allergy = new Allergy({
        name: request.body.name,
        reaction: request.body.reaction,
    });
    allergy
        .save()
        // return success if the new user is added to the database successfully
        .then((result) => {
          response.status(201).send({
            message: "Allergy Added Successfully",
            result,
          });
        })
        // catch erroe if the new user wasn't added successfully to the database
        .catch((error) => {
          response.status(500).send({
            message: "Error creating allergy",
            error,
          });
        });
});

// get a particular medication
app.get("/get-medication/:id", async (request, response) => {
  try{
    const data = await Medication.findById(request.params.id);
    response.json(data);
  }
  catch(error){
    response.status(500).json({message: error.message});
  }
});

// get a particular allergy
app.get("/get-allergy/:id", async (request, response) => {
  try{
    const data = await Allergy.findById(request.params.id);
    response.json(data);
  }
  catch(error){
    response.status(500).json({message: error.message});
  }
});

// get all medications
app.get("/get-medications", async (request, response) => {
  try{
    const data = await Medication.find();
    response.json(data);
  }
  catch(error){
    response.status(500).json({message: error.message});
  }
});

// get all allergies
app.get("/get-allergies", async (request, response) => {
  try{
    const data = await Allergy.find();
    response.json(data);
  }
  catch(error){
    response.status(500).json({message: error.message})
  }
});

// free endpoint
app.get("/free-endpoint", (request, response) => {
  response.json({ message: "You are free to access me anytime" });
});

// authentication endpoint
app.get("/auth-endpoint", auth, (request, response) => {
  response.send({ message: "You are authorized to access me" });
});

module.exports = app;