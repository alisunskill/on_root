import React from "react";
import styles from "../styles/footer.module.css";
import logo from "../public/images/flogo.svg";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div>
      <div className={`row justify-content-around m-0 ${styles.footer_main}`}>
        <div className={`col-md-12 col-lg-4 ${styles.footer_col}`}>
          <Image className={styles.footer_1_logo} src={logo} alt="logo" />
          <p className="fw-400">
            Onroot app provides a comprehensive guide to events and activities
            around the world, with curated posts and itineraries to help you
            plan your next adventure with ease."
          </p>
        </div>
        <div className={`col-lg-2 col-md-4 col-sm-4 col-6 `}>
          <p className={styles.footer_heading}>Quick Links</p>
          <a className={styles.footer_link} href="">
            Home
          </a>
          <a className={styles.footer_link} href="">
            About
          </a>
          <a className={styles.footer_link} href="">
            Login
          </a>
          <a className={styles.footer_link} href="">
            Sign Up
          </a>
        </div>
        <div className={`col-lg-2 col-md-4 col-sm-4 col-6 `}>
          <p className={styles.footer_heading}>Destinations</p>
          <a className={styles.footer_link} href="">
            New York
          </a>
          <a className={styles.footer_link} href="">
            Germany
          </a>
          <a className={styles.footer_link} href="">
            Pakistan
          </a>
          <a className={styles.footer_link} href="">
            Norway
          </a>
        </div>
        <div className={`col-lg-2 col-md-4 col-sm-4 col-6 ${styles.socialhero}`}>
          <p className={styles.footer_heading}>Social Media</p>
          <a href="">
            <FontAwesomeIcon className="mx-2 w-30px" icon={faFacebook} />
          </a>
          <a href="">
            <FontAwesomeIcon className="mx-2 w-30px" icon={faTwitter} />
          </a>
          <a href="">
            <FontAwesomeIcon className="mx-2 w-30px" icon={faInstagram} />
          </a>
          <a href="">
            <FontAwesomeIcon className="mx-2 w-30px" icon={faYoutube} />
          </a>
        </div>
      </div>
      <div className={styles.footer_end}>
        Copyright © 2023 Onroot. All rights reserved. Developed by Sun Skill
        Techs
      </div>
    </div>
  );
}
