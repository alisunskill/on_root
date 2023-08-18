import React, { useEffect, useState } from "react";
import styles from "../../styles/signin.module.css";
import Captcha from "./Captcha";
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

function Login() {
  const router = useRouter();
  const [storedUserID, setStoredUserID] = useState(null);
  const [storedEmail, setStoredEmail] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  useEffect(() => {
    const userID = localStorage.getItem("userID");
    const email = localStorage.getItem("email");
    setStoredUserID(userID);
    setStoredEmail(email);
    if (userID && email) {
      router.push("/profile");
    } else {
      router.push("/login");
    }
  }, []);

  // eye password

  const handleLogin = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/users/login",
        values
      );
      if (response.status === 200) {
        const { token } = response.data;
        localStorage.setItem("token", token);
        resetForm();
        setSubmitting(false);
      }
      const storedUserID = localStorage.getItem("userID");
      const storedEmail = localStorage.getItem("email");
      console.log(storedUserID, "storedUserID");
      if (!storedEmail || !storedUserID) {
        alert("User ID or Email is missing. Please log in again.");
      } else {
        // alert("successful");
        router.push("/createitinerary");
      }
    } catch (error) {
      alert("Error during login. Please try again later.");
      console.error("Error during login:", error);
    }
  };

  const loginSchema = Yup.object().shape({
    email: Yup.string().required("Username or Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters long")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/,
        "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character"
      )
      .required("Required Password"),
  });

  return (
    <>
      <div className={`row ${styles.confirmme}`}>
        <div className="col-lg-12 d-flex justify-content-center">
          <div className={styles.signupsignupcontainer}>
            <h1 className={styles.signupheading1}>Login</h1>

            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={loginSchema}
              onSubmit={handleLogin}
            >
              {({ isValid }) => (
                <Form>
                  <Field
                    name="email"
                    style={{ padding: "10px" }}
                    className="form-control rounded-2 border-0 mt-2"
                    placeholder="Email"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-light"
                  />

                  <div className="position-relative">
                    <Field
                      name="password"
                      style={{ padding: "10px" }}
                      className="form-control rounded-2 border-0 mt-2"
                      placeholder="Password"
                      // type="password"
                      type={showPassword ? "text" : "password"}
                    />
                    <button
                      type="button"
                      className="password-toggle-button position-absolute"
                      onClick={() => setShowPassword(!showPassword)}
                      style={{
                        background: "none",
                        border: "none",
                        padding: "0",
                        margin: "0",
                        cursor: "pointer",
                        right: "12px",
                        top: "13px",
                        color: "black",
                      }}
                    >
                      <FontAwesomeIcon
                        icon={showPassword ? faEyeSlash : faEye}
                      />
                    </button>
                  </div>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-light"
                  />

                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-light"
                  />

                  <div className="text-center">
                    <div className="w-100 d-flex justify-content-center mt-3">
                      <Captcha />
                    </div>
                    <button
                      className="savebtn text-light mt-4"
                      type="submit"
                      disabled={!isValid}
                    >
                      Login
                    </button>
                    <div className="text-center mt-2">
                      <Link
                        href="/forgotpassword"
                        style={{ color: "#fff", textDecoration: "none" }}
                      >
                        Forgot Password?
                      </Link>{" "}
                      <br />
                      <Link
                        href="/signup"
                        style={{ color: "#fff", textDecoration: "none" }}
                      >
                        New member? Register here.
                      </Link>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
