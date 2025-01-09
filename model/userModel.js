import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  location: {
    type: String,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
  service: {
    type: String,
    required: true,
  },
  timeanddate: {
    type: String,
    required: true,
  },
  totalprice: {
    type: Number,
    required: true,
  },
  vehicle: {
    type: String,
    required: true,
  },
  vehiclenumber: {
    type: String,
    required: true,
  },
});

export default mongoose.model("users", userSchema);
