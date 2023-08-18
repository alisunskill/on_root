require("dotenv").config();

const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

const jwtKey = process.env.JWT_SECRET;
// Create a new user
exports.createUser = async (req, res) => {
  try {
    const { firstName, lastName, image, email, username, password } = req.body;

    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res
        .status(409)
        .json({ message: "Email or username already exists" });
    }

    console.log(req.body);
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = new User({
      firstName,
      lastName,
      image,
      email,
      username,
      password: hashedPassword,
    });
    await user.save();
    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Login user
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log(email, password);

    // Find the user by email
    const user = await User.findOne({ email });

    // Check if the user exists
    if (!user) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid credentials2" });
    }

    const token = jwt.sign({ userId: user._id, email: user.email }, jwtKey, {
      expiresIn: "1h",
    });
    user.token = token;
    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const resetToken = crypto.randomBytes(20).toString("hex");
    user.resetToken = resetToken;
    user.resetTokenExpiration = Date.now() + 300000;
    // 5 minutes expired token

    await user.save();

    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: "judah30@ethereal.email",
        pass: "UTWMRQRsyrGDzAHbjw",
      },
    });

    const mailOptions = {
      from: "judah30@ethereal.email",
      to: user.email,
      subject: "Password Reset",
      text: `Click the following link to reset your password: http://localhost:8000/reset-password?token=${resetToken}`,
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({ message: "Failed to send email" });
      } else {
        console.log("Email sent:", info.response);
        res.status(200).json({
          message: "Reset token generated successfully and email sent",
          resetToken,
        });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
exports.resetPassword = async (req, res) => {
  try {
    const { resetToken, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const user = await User.findOne({
      resetToken,
      resetTokenExpiration: { $gt: Date.now() }, // Check if token expiration is greater than current time
    });

    if (!user) {
      return res
        .status(400)
        .json({ message: "Invalid or expired reset token" });
    }

    // Update user's password and clear reset token
    user.password = hashPassword;
    user.resetToken = undefined;
    user.resetTokenExpiration = undefined;

    // Save the user with the new password and cleared reset token
    await user.save();

    res.status(200).json({ message: "Password reset successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
