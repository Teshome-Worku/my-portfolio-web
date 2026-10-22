const express = require("express");
const router = express.Router();
const Contact = require("../models/contact");
const sendEmail=require('../utils/sendEmail')
const protect=require("../middleware/authMiddleware")


// POST /api/contact
router.post("/", async (req, res) => {
  try {
    let { name, email,phone, projectType, budget, message } = req.body;

    // 🔹 Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Trim whitespace to prevent empty space bypassing length checks
    name = name.trim();
    email = email.trim();
    message = message.trim();
    phone = phone ? phone.trim() : "";
    projectType = projectType ? projectType.trim() : "";
    budget = budget ? budget.trim() : "";

    if(name.length < 3){
      return res.status(400).json({ message: "Name must be at least 3 characters long" });
    }
    if(name.length > 30){
      return res.status(400).json({ message: "Name must be at most 30 characters long" });
    }

    // 🔹 Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Please provide a valid email address" });
    }

    if(message.length < 5){
      return res.status(400).json({ message: "Message must be at least 5 characters long" });
    }

    // 🔹 Save to database
    const newContact = new Contact({
      name,
      email,
      phone,
      projectType,
      budget,
      message,
    });
    //save to database
    await newContact.save();

    //send email
    await sendEmail({name,email,message});
    res.status(201).json({
      message: "Message sent successfully",
      
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server error",
    });
  }
});
// GET /api/contact
router.get("/",protect, async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });

    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// DELETE /api/contact/:id
router.delete("/:id",protect, async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }
    res.status(200).json({ message: "Message deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message:error});
  }
});

module.exports = router;