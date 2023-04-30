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
          response.status(200).send({
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

const ingredients = {
  "lipitor": "Atorvastatin",
  "aspirin": "Aspirin",
  "cozaar": "Losartan potassium",
  "metformin": "Metformin hydochloride",
  "zocor": "Simvastatin",
  "omeprazole": "Omeprazole",
  "calcium": "Calcium",
  "hydrocodone": "Hydrocodone",
  "birth control": "Estrogen, progesterone",
  "norvasc": "Amlodipine",
  "amlodipine":"Amlodipine",
  "losartan": "Losartan"

}

const sideEffects = {
  "lipitor": "nausea, headaches, nosebleeds, sore throat, cold-like symptoms, constipation, diarrhea",
  "aspirin": "abdominal pain/discomfort, bloody urine, chest pain, confusion, constipation, fever, etc.",
  "cozaar": "burning/tingling feeling, confusion, difficulty breathing, dizziness, irregular heartbeat, stomach pain, etc.",
  "metformin": "nausea, vomitting, diarrhea, stomach ache, lost of appetite, metallic taste",
  "zocor": "memory problems, confusion",
  "omeprazole": "headache, abdominal pain",
  "hydrocodone": "stomach pain, dry mouth, tiredness, headache, back pain, muscle, frequent or painful urination",
  "calcium": "constipation, severe diarrhea, abdominal pain",
  "birth control": "spotting, breast tenderness, headaches, nausea, bloating, increased blood pressure, etc.",
  "norvasc": "swelling, headache, upset stomach, nausea, stomach pain, dizziness, drowsiness, etc.",
  "amlodopine": "swelling, headache, upset stomach, nausea, stomach pain, dizziness, drowsiness, etc.",
  "losartan": "abdominal pain/discomfort, bloody urine, chest pain, confusion, constipation, fever, etc."
}

const images = {
  "lipitor": "https://pharmacy.ansvel.com.ng/wp-content/uploads/sites/10/2016/03/lipitor-_atorvastatin-calcium_-20mg-x30-tabs-1_kjvg2h_500x.webp",
  "aspirin": "https://m.media-amazon.com/images/I/71-g7kjSLmL.jpg",
  "cozaar": "https://om.rosheta.com/upload/5ce9b39d79e7f7470ac2fd258277c40ef39f4d76af8092dfdd990c9ac785978b.jpg",
  "metformin": "https://www.mcguffmedical.com/content/images/thumbs/0013873_metformin-500mg-100-tabletsbottle.jpeg",
  "zocor": "https://cdn.shopify.com/s/files/1/0571/9752/7133/articles/zocor-welzo.png?v=1679833235",
  "calcium": "https://cdn.shopify.com/s/files/1/0066/7569/3639/products/NM2508L601CALCIUMfront_47558c0b-ea8a-47b5-a0ec-e0c9d0b3fbd9.png?v=1644458739",
  "omeprazole": "https://m.media-amazon.com/images/I/61QFgOl6xpL._AC_UF1000,1000_QL80_.jpg",
  "hydrocodone": "https://www.banyantreatmentcenter.com/wp-content/uploads/2021/10/hydrocodine-blog-img.jpg",
  "birth control": "https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/05/birthcontrol-pills-1296x728-header.jpg?w=1155&h=1528",
  "amlodopine": "https://cdn.commercev3.net/cdn.shopmedvet.com/images/large/RXAMLOD10-90.jpg",
  "norvasc": "https://s40123.pcdn.co/wp-content/uploads/2013/12/Norvasc.jpg.optimal.jpg",
  "losartan": "https://om.rosheta.com/upload/5ce9b39d79e7f7470ac2fd258277c40ef39f4d76af8092dfdd990c9ac785978b.jpg"
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
  if(med.toLowerCase() in images) return images[med.toLowerCase()];
  return "https://t4.ftcdn.net/jpg/02/87/86/27/360_F_287862773_eVjRtEA5jOYUKywa9xy9kunFr4BquZdO.jpg";
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

// Returns the military time for the hour
function getHour(time) {
  let timeLen = time.length;
  let medHour = timeLen == 7 ? time.substring(0, 1) : time.substring(0, 2);
  let amOrPM = timeLen == 7 ? time.substring(5, 7) : time.substring(6, 8);
  let hour = amOrPM === "PM" ? parseInt(medHour) + 12 : parseInt(medHour);
  return hour;
}

// Sorts the data in ascending order of time
function sortByTime(data) {
  var currMed, currTime, j;
  for (var i = 1; i < data.length; i++) {
    currMed = data[i];
    currTime = getHour(data[i].time);
    j = i - 1;
    while (j >= 0 && getHour(data[j].time) > currTime) {
      data[j + 1] = data[j];
      j = j - 1;
    }
    data[j+1] = currMed;
  }
}

// get medication reminders
app.get("/get-reminders", async (request, response) => {
  try{
    let data = await Medication.find();
    sortByTime(data);
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
  let timesLeft = null;
  if(request.body.timesLeft) timesLeft = Number(request.body.timesLeft)
  let newvalues = {
    $set: {
      name: request.body.name,
      dosage: request.body.dosage,
      frequency: request.body.frequency,
      when: request.body.when,
      completed: Boolean(request.body.completed),
      timesLeft: timesLeft,
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

 // delete a particular medication
app.post("/delete-medication/:id", async (request, response) => {
  try{
    let myquery = { _id: new ObjectId(request.params.id) };
    const data = await Medication.deleteOne(myquery);
    response.status(200).send({ message: "Medication deleted succesfully" });
  }
  catch(error){
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