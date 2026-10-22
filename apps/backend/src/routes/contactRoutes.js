const express = require("express");
const router = express.Router();
const Contact = require("../models/contact");
const sendEmail = require("../utils/sendEmail");
const protect = require("../middleware/authMiddleware");

// POST /api/contact
router.post("/", async (req, res) => {
  try {
    let { name, email, phone, projectType, budget, message } = req.body;

    // 🔹 Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ message: "Name, email, and message are required" });
    }

    // Trim whitespace
    name = name.trim();
    email = email.trim();
    message = message.trim();
    phone = typeof phone === "string" ? phone.trim() : "";
    projectType = typeof projectType === "string" ? projectType.trim() : "";
    budget = typeof budget === "string" ? budget.trim() : "";

    if (name.length < 3) {
      return res.status(400).json({ message: "Name must be at least 3 characters long" });
    }
    if (name.length > 50) {
      return res.status(400).json({ message: "Name must be at most 50 characters long" });
    }

    // 🔹 Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Please provide a valid email address" });
    }

    if (message.length < 5) {
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
    await newContact.save();

    // 🔹 Send notification email with full inquiry details
    await sendEmail({
      name,
      email,
      phone,
      projectType,
      budget,
      message,
    });

    res.status(201).json({
      message: "Message sent successfully",
      contact: newContact,
    });
  } catch (error) {
    console.error("Contact submission error:", error);
    res.status(500).json({
      message: "Server error",
    });
  }
});

// GET /api/contact (Protected for Admin)
router.get("/", protect, async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(contacts);
  } catch (error) {
    console.error("Error fetching contacts:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// DELETE /api/contact/:id (Protected for Admin)
router.delete("/:id", protect, async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }
    res.status(200).json({ message: "Message deleted successfully" });
  } catch (error) {
    console.error("Error deleting contact:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
