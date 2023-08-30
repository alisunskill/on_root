  import React from "react";
  import styles from "../../styles/signin.module.css";
  import axios from "axios";
  import { Formik, Form, Field, ErrorMessage } from "formik";
  import * as Yup from "yup";
  import { useRouter } from "next/router";

  function ForgotPassword() {
    const router = useRouter();

    const forgotSchema = Yup.object().shape({
      email: Yup.string().required("email is required"),
    });

    const handleForgot = async (values) => {
      console.log("ALi");

      try {
        const response = await axios.post(
          "http://localhost:8000/api/users/forgot-password",
          values
        );

        if (response.status === 200) {
          console.log("Password reset request successful.");
          router.push("/resetpassword");
        } else {
          console.error("Password reset request failed.");
        }
      } catch (error) {
        console.error("Error occurred:", error);
      }
    };

    return (
      <>
        <div className={`row ${styles.confirmme}`}>
          <div className="col-lg-12 d-flex justify-content-center">
            <div className={styles.signupsignupcontainer}>
              <h1 className={styles.signupheading1}>Forgot Password</h1>

              <div className="row mt-1 gy-3 d-flex justify-content-center align-center px-5">
                <Formik
                  initialValues={{
                    email: "", 
                  }}
                  validationSchema={forgotSchema}
                  onSubmit={handleForgot}
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
                        className="text-danger"
                      />

                      <div className="text-center">
                        <button
                          className="savebtn text-light mt-4"
                          type="submit"
                          disabled={!isValid}
                        >
                          FORGOT PASSWORD
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  export default ForgotPassword;
