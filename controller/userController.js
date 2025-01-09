import User from "../model/userModel.js";

export const create = async (req, res) => {
  try {
    const bookingData = new User(req.body);
    const savedBooking = await bookingData.save();
    res.status(200).json(savedBooking);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const fetch = async (req, res) => {
  try {
    // Fetch all user data from the database
    const users = await User.find();
    res.status(200).json(users); // Return the data as a JSON response
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
