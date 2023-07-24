import React, { useRef, useState } from "react";
import styles from "../../styles/signin.module.css";
import Captcha from "./Captcha";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import axios from "axios";

function Signup() {
  const router = useRouter();

  const fileInputRef = useRef(null);

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    debugger
    console.log(values);
    try {
      const response = await axios.post(
        "http://localhost:8000/api/users",
        values
      );

      console.log(response.data);

      resetForm();
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      setSubmitting(false);
      router.push("/login");
    } catch (error) {
      console.error("Error sending data to backend:", error);
    }
  };

  const signupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(10, "Too Long!")
      .required("Required First Name"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(10, "Too Long!")
      .required("Required Last Name"),

    image: Yup.mixed().required("Please upload a file"),

    email: Yup.string().email("Invalid email").required("Required"),
    username: Yup.string()
      .min(2, "Too Short!")
      .max(20, "Too Long!")
      .required("Required Username"),
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
            <h1 className={styles.signupheading1}>SIGN UP</h1>

            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                image: "",
                email: "",
                username: "",
                password: "",
              }}
              validationSchema={signupSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched, isValid }) => (
                <Form>
                  <div className="d-flex gap-3 mt-4">
                    <div className="w-100">
                      <Field
                        name="firstName"
                        style={{ padding: "10px" }}
                        className="form-control rounded-2 border-0 "
                        placeholder="First Name"
                      />
                      {errors.firstName && touched.firstName ? (
                        <div className="text-danger">{errors.firstName}</div>
                      ) : null}
                    </div>

                    <div className="w-100">
                      <Field
                        name="lastName"
                        style={{ padding: "10px" }}
                        className="form-control rounded-2 border-0 "
                        placeholder="Last Name"
                      />
                      {errors.lastName && touched.lastName ? (
                        <div className="text-danger ">{errors.lastName}</div>
                      ) : null}
                    </div>
                  </div>

                  <Field
                    type="file"
                    name="image"
                    ref={fileInputRef}
                    style={{ padding: "10px" }}
                    className="form-control rounded-2 border-0 mt-2"
                    placeholder="Email"
                    accept=".pdf,.doc,.docx,.jpg,.png"
                  />

                  {errors.image && touched.image ? (
                    <div className="text-danger">{errors.image}</div>
                  ) : null}

                  <Field
                    name="email"
                    type="email"
                    style={{ padding: "10px" }}
                    className="form-control rounded-2 border-0 mt-2"
                    placeholder="Email"
                  />
                  {errors.email && touched.email ? (
                    <div className="text-danger">{errors.email}</div>
                  ) : null}
                  <Field
                    name="username"
                    style={{ padding: "10px" }}
                    className="form-control rounded-2 border-0 mt-2"
                    placeholder="Username"
                  />
                  {errors.username && touched.username ? (
                    <div className="text-danger ">{errors.username}</div>
                  ) : null}

                  <Field
                    type="password"
                    name="password"
                    style={{ padding: "10px" }}
                    className="form-control rounded-2 border-0 mt-2"
                    placeholder="Password"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-danger"
                  />

                  <div className="text-center">
                    <button
                      type="submit"
                      className="savebtn text-light mt-4"
                      disabled={!isValid}
                    >
                      Sign Up
                    </button>
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

export default Signup;
