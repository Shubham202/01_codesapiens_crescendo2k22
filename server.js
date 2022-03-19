const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect(
  ""
);

const userSchema = {
  name: String,
  emailId: String,
  currency: Number,
  city: String,
  phoneNumber: Number,
  password: String,
}

const animalSchema = {
  type: String,
  details: String,
  exactLocation: String,
  city: String,
  problem: String,
}

const rcenterSchema = {
  location: String,
  name: String,
  city: String,
  currency: Number,
  phoneNumber: Number,
  emailId: String,
}

const User = mongoose.model("User", userSchema);
const Animal = mongoose.model("Animal", animalSchema);
const RescueCenter = mongoose.model("RescueCenter", rcenterSchema);

app.post('/registerUser', (req, res) => {

  const user = new User({
    name: req.body.name,
    emailId: req.body.email,
    password: req.body.password,
    currency: req.body.currency,
    city: req.body.city,
    phoneNumber: req.body.phoneNumber,
  });

  user.save();
  res.redirect('/');

});

app.post('/animal', (req, res) => {

  const animal = new Animal({
    type: req.body.type,
    details: req.body.details,
    exactLocation: req.body.exactLocation,
    city: req.body.city,
    problem: req.body.problem,
  });

  animal.save();
  res.redirect("/");

});

app.post('/rcenter', (req, res) => {

  const rescueCenter = new RescueCenter({
    location: req.body.location,
    name: req.body.name,
    city: req.body.city,
    currency: req.body.currency,
    phoneNumber: req.body.phoneNumber,
    emailId: req.body.emailId,
  });

  rescueCenter.save();
  res.redirect("/");

});

const port = 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));