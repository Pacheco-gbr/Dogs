import React from "react";
import { ReactComponent as Dogs } from "../Assets/dogs-footer.svg";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Dogs />
      <p>Dogs. Some rights reserved</p>
    </div>
  );
};

export default Footer;
