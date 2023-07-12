import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/home.module.css";
import Link from "next/link";

const Searchbar = ({ data }) => {
  const [searchValue, setSearchValue] = useState("");
  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <Link
      href="/infinitescroll"
      className={`col-xl-6 col-lg-6 col-md-6 col-sm-6  ${styles.inputgroup}`}
    >
      <Form>
        <FormControl
          type="text"
          value={searchValue}
          onChange={handleInputChange}
          aria-describedby="button-addon5"
          className={`form-control ${styles.searchvally}`}
          list="itemList"
        />
        <datalist id="itemList">
          {data.map((item) => (
            <option key={item.id} value={item.title} />
          ))}
        </datalist>
        <FontAwesomeIcon className={styles.inputgroupicon} icon={faSearch} />
      </Form>
    </Link>
  );
};

export default Searchbar;
