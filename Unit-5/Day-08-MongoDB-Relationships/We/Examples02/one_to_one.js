const mongoose = require("mongoose");

// Person Schema :
const personSchema = mongoose.schema({
  name: "String",
  age: "Number",
  address: "String",
  phone: "Number",
});

// Person Model :
const personModel = mongoose.model("person", personSchema);

// Passport Schema :
const passportSchema = mongoose.schema({
  passportNumber: "Number",
  country: "String",
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "person",
  },
});

// Passport Model :
const passportModel = mongoose.model("passport", passportSchema);


// (Query)
const createPersonWithPassport = async () => {

    // Create Person :
  const person = new personModel({
    name: "santosh",
    age: 22,
    address: "pune",
    phone: 1234567890,
  });
  await person.save()
  

  // Create Passport :
  const passport = new passportModel ({
    passportNumber: 123456,
    country: "India",
    userId: person._id,
  })  
  await passport.save()
};


createPersonWithPassport()