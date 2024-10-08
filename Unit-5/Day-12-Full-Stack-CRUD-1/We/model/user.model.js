import mongoose  from "mongoose";

const userSchema =  mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
    enum: ["male", "female", "other"],
  },
  age: {
    type: Number,
    required: true,
  },
},{
  versionKey: false,
  timestamps: true
});

const userModel = mongoose.model("User", userSchema);
export { userModel };
