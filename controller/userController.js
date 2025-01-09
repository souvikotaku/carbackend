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
    return res.json("Hello world");
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
