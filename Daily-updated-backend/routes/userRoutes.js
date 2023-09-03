const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Create a new user
router.post("/", userController.createUser);

// Login user
router.post("/login", userController.loginUser);

// Forgot password - Generate reset token
router.post("/forgot-password", userController.forgotPassword);

// Reset password
router.post("/resetpassword", userController.resetPassword);

// verify new user email
router.get("/login/:token", userController.verifyEmail);

module.exports = router;
