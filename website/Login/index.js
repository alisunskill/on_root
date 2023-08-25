import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import {
  fetchLoginUser,
  setUserID,
} from "../../store/actions/recommendationActions";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../styles/signin.module.css";
import ReCAPTCHA from "react-google-recaptcha";
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { handleLogout } from "./authUtils";

// import setUserID

function Login() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [storedUserID, setStoredUserID] = useState("");
  const [storedEmail, setStoredEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [recaptchaResponse, setRecaptchaResponse] = useState("");
  if (storedUserID && storedEmail) {
    dispatch(setUserID(storedUserID, storedEmail));
  }

  useEffect(() => {
    const userID = storedUserID;
    const email = storedEmail;
    console.log(email, userID, "ali");

    // Set storedUserID and storedEmail with retrieved values
    // setStoredUserID(userID);
    // setStoredEmail(email);

    // if (userID && email) {
    //   router.push("/profile");
    // } else {
    //   handleLogout();
    //   router.push("/login");
    // }
  }, [dispatch]);

  const handleCaptchaChange = (response) => {
    setRecaptchaResponse(response);
  };
  // const handleLogout = () => {
  //   localStorage.removeItem("token");
  //   router.push("/login");
  // };
  // eye password

  // const handleLogin = async (values, { setSubmitting, resetForm }) => {
  //   try {
  //     const response = await axios.post(
  //       "http://localhost:8000/api/users/login",
  //       values
  //     );
  //     if (response.status === 200) {
  //       const { token } = response.data;
  //       localStorage.setItem("token", token);
  //       resetForm();
  //       setSubmitting(false);
  //     }
  //     const storedUserID = localStorage.getItem("userID");
  //     const storedEmail = localStorage.getItem("email");

  //     if (!storedEmail || !storedUserID) {
  //       Swal.fire({
  //         text: "Email or Password is missing. Please log in again.",
  //         icon: "error",
  //       });
  //     } else {
  //       // alert("successful");
  //       router.push("/createitinerary");
  //     }
  //   } catch (error) {
  //     Swal.fire({
  //       text: "Error during Login.",
  //       icon: "error",
  //     });
  //     console.error("Error during login:", error);
  //   }
  // };

  // const handleLogin = async (values, { setSubmitting }) => {
  //   try {
  //     if (!recaptchaResponse) {
  //       Swal.fire({
  //         text: "Please complete the reCAPTCHA challenge.",
  //         icon: "error",
  //       });
  //       return;
  //     }

  //     const response = await axios.post(
  //       "http://localhost:8000/api/users/login",
  //       // values
  //       { ...values, recaptchaResponse }
  //     );
  //     // console.log("Response from server:", response.data);

  //     if (response.status === 200) {
  //       const { token, userID, email } = response.data;
  //       setStoredUserID(userID);
  //       setStoredEmail(email);
  //       console.log(userID, email, "jkjkjk");
  //       localStorage.setItem("token", token);
  //       localStorage.setItem("userID", userID);
  //       localStorage.setItem("email", email);
  //       setSubmitting(false);
  //       // router.push("/createitinerary");
  //     }
  //   } catch (error) {
  //     if (error.response && error.response.status === 401) {
  //       Swal.fire({
  //         text: "Invalid email or password.",
  //         icon: "error",
  //       });
  //     } else {
  //       Swal.fire({
  //         text: "Error during Login.",
  //         icon: "error",
  //       });
  //     }
  //   }
  // };
  const handleLogin = async (values, { setSubmitting }) => {
    try {
      if (!recaptchaResponse) {
        Swal.fire({
          text: "Please complete the reCAPTCHA challenge.",
          icon: "error",
        });
        return;
      }

      dispatch(fetchLoginUser({ ...values, recaptchaResponse }));

      setSubmitting(true);
      router.push("/profile");
    } catch (error) {
      if (error.response && error.response.status === 401) {
        Swal.fire({
          text: "Invalid email or password.",
          icon: "error",
        });
      } else {
        Swal.fire({
          text: "Error during Login.",
          icon: "error",
        });
      }
      setSubmitting(false);
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

                  <div className="text-center">
                    <div className="w-100 d-flex justify-content-center mt-3">
                      <ReCAPTCHA
                        sitekey="6LdNryEnAAAAAHvI4ty3RvMc2dnX0fR9aF1dXq7r"
                        onChange={handleCaptchaChange}
                      />
                    </div>
                    <button
                      className="savebtn text-light mt-4 cursor-pointer"
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
