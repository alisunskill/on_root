import React, { useState } from "react";
import styles from "../../styles/signin.module.css";
import Link from "next/link";

function ForgotPassword() {
  const [formValues, setFormValues] = useState([
    {
      label: "Name",
      type: "text",
      value: "",
      placeholder: "Username or Email",
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


  return (
    <>
      <div className={`row ${styles.confirmme}`}>
        <div className="col-lg-12 d-flex justify-content-center">
          <div className={styles.signupsignupcontainer}>
            <h1 className={styles.signupheading1}>Forgot Password</h1>

            <form onSubmit={handleSubmit}>
              <div className="row mt-1 gy-3 d-flex justify-content-center align-center px-5">
                {formValues.map((field, index) => (
                  <div key={index} className={`p-0 ${field.columnClass}`}>
                  <div className="w-100">
                        <input
                          className="form-control rounded-2 border-0 w-100"
                          style={{padding:"11px"}}
                          type={field.type}
                          value={field.value}
                          onChange={(e) => handleChange(e, index)}
                          placeholder={field.placeholder}
                        />
                      </div>
                  </div>
                ))}
              
                <button className="savebtn text-light mt-4" type="submit">
                RESET PASSWORD
                </button>
              </div>
           
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
