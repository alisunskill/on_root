import React, { useState } from "react";
import styles from "../../styles/signin.module.css";
import Captcha from "./Captcha";
import Link from "next/link";

function Login() {
  const [formValues, setFormValues] = useState([
    {
      label: "Name",
      type: "text",
      value: "",
      placeholder: "Username or Email",
      columnClass: "col-lg-12",
    },
    {
      label: "Password",
      type: "Password",
      value: "",
      placeholder: "Last Name",
      columnClass: "col-lg-12",
    },
  ]);

  const handleChange = (e, index) => {
    const { value } = e.target;
    const values = [...formValues];
    values[index].value = value;
    setFormValues(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  // captcha
  const [captchaValue, setCaptchaValue] = useState("");

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  return (
    <>
      <div className={`row ${styles.confirmme}`}>
        <div className="col-lg-12 d-flex justify-content-center">
          <div className={styles.signupsignupcontainer}>
            <h1 className={styles.signupheading1}>Login</h1>

            <form onSubmit={handleSubmit}>
              <div className="row mt-1 gy-3 d-flex justify-content-center align-center px-5">
                {formValues.map((field, index) => (
                  <div key={index} className={field.columnClass}>
                    {field.type === "radio" ? (
                      field.options.map((option, optionIndex) => (
                        <div key={optionIndex}>
                          <label className="w-100">
                            <input
                          style={{padding:"11px"}}
                              type="radio"
                              name={`radio-${index}`}
                              value={option}
                              checked={field.value === option}
                              onChange={(e) => handleChange(e, index)}
                            />
                            {option}
                          </label>
                        </div>
                      ))
                    ) : (
                      <div className="w-100">
                        <input
                          style={{padding:"11px"}}
                          className="form-control rounded-2 border-0 w-100"
                          type={field.type}
                          value={field.value}
                          onChange={(e) => handleChange(e, index)}
                          placeholder={field.placeholder}
                        />
                      </div>
                    )}
                  </div>
                ))}
                <div className="w-100 d-flex justify-content-center">
                  <Captcha onChange={handleCaptchaChange} />
                </div>
                <button className="savebtn text-light mt-4" type="submit">
                  Login
                </button>
              </div>
              <div className="text-center mt-2">
                <Link
                  href="text-light"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  Forgot Password?
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
