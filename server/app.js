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

const ObjectId = require("mongodb").ObjectId;

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
          response.status(201).send({
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

const ingredients = {
  "lipitor": "Atorvastatin",
  "aspirin": "Aspirin",
  "cozaar": "Losartan potassium",
  "metformin": "Metformin hydochloride"
}

const sideEffects = {
  "lipitor": "nausea, headaches, nosebleeds, sore throat, cold-like symptoms, constipation, diarrhea",
  "aspirin": "abdominal pain/discomfort, bloody urine, chest pain, confusion, constipation, fever, etc.",
  "cozaar": "burning/tingling feeling, confusion, difficulty breathing, dizziness, irregular heartbeat, stomach pain, etc.",
  "metformin": "nausea, vomitting, diarrhea, stomach ache, lost of appetite, metallic taste"
}

function getIngredients(med) {
  if(!med) return;
  if(med.toLowerCase() in ingredients) return ingredients[med.toLowerCase()];
  return "Ingredients";
}

function getInteraction(med) {
  return 'No major interactions found in current prescription. No major interactions found with my allergies.';
}

function getSideEffects(med) {
  if(med.toLowerCase() in sideEffects) return sideEffects[med.toLowerCase()];
  return "Side effect currently unavailable";
}

function getImage(med) {
  return 'https://images.albertsons-media.com/is/image/ABS/960104140-ECOM?$ng-ecom-pdp-tn$&defaultImage=Not_Available';
}

function getDescription(dosage) {
  return `Take ${dosage}`;
}

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

app.post("/add-medication", (request, response) => {
    const medication = new Medication({
        name: capitalize(request.body.name),
        dosage: request.body.dosage,
        frequency: request.body.frequency,
        time: request.body.time,
        pill_count: Number(request.body.pill_count),
        timesLeft: Number(parseInt(request.body.frequency)),
        completed: false,
        ingredients: getIngredients(request.body.name),
        interaction: getInteraction(request.body.name),
        sideEffects: getSideEffects(request.body.name),
        image: getImage(request.body.name),
        description: getDescription(request.body.dosage),
    })
    medication
        .save()
        // return success if the new user is added to the database successfully
        .then((result) => {
          response.status(200).send({
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
          response.status(200).send({
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
    response.status(200).json(data);
  }
  catch(error){
    response.status(500).json({message: error.message});
  }
});

// get a particular allergy
app.get("/get-allergy/:id", async (request, response) => {
  try{
    const data = await Allergy.findById(request.params.id);
    response.status(200).json(data);
  }
  catch(error){
    response.status(500).json({message: error.message});
  }
});

// get all medications
app.get("/get-medications", async (request, response) => {
  try{
    const data = await Medication.find();
    response.status(200).json(data);
  }
  catch(error){
    response.status(500).json({message: error.message});
  }
});

// get all allergies
app.get("/get-allergies", async (request, response) => {
  try{
    const data = await Allergy.find();
    response.status(200).json(data);
  }
  catch(error){
    response.status(500).json({message: error.message})
  }
});

// Update a medication by id
app.post("/update-medication/:id", async (request, response) => {
  let myquery = { _id: new ObjectId(request.params.id) };
  let newvalues = {
    $set: {
      name: request.body.name,
      dosage: request.body.dosage,
      frequency: request.body.frequency,
      when: request.body.when,
      completed: Boolean(request.body.completed),
      timesLeft: Number(request.body.timesLeft),
    },
  };
  try {
    const data = await Medication.updateOne(myquery, newvalues);
    response.status(200).send({ message: "Medication updated succesfully" });
  }
  catch(error) {
    response.status(500).json({message: error.message});
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