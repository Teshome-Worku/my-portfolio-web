require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Admin = require("./src/models/Admin");

const seedAdmin = async () => {
  const { MONGO_URI, ADMIN_EMAIL, ADMIN_PASSWORD } = process.env;

  if (!MONGO_URI || !ADMIN_EMAIL || !ADMIN_PASSWORD) {
    throw new Error(
      "MONGO_URI, ADMIN_EMAIL, and ADMIN_PASSWORD must be set in the environment."
    );
  }

  await mongoose.connect(MONGO_URI);

  const hashedPassword = await bcrypt.hash(ADMIN_PASSWORD, 10);
  const admin = await Admin.findOneAndUpdate(
    { email: ADMIN_EMAIL.trim().toLowerCase() },
    { email: ADMIN_EMAIL.trim().toLowerCase(), password: hashedPassword },
    { new: true, upsert: true, runValidators: true, setDefaultsOnInsert: true }
  );

  console.log(`Admin credentials seeded for ${admin.email} ✅`);
};

seedAdmin()
  .catch((error) => {
    console.error("Admin seeding failed:", error.message);
    process.exitCode = 1;
  })
  .finally(async () => {
    await mongoose.disconnect();
  });