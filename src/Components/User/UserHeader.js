import React from "react";
import styles from "./UserHeader.module.css";
import { useLocation } from "react-router-dom";
import UserHeaderNav from "./UserHeaderNav";

const UserHeader = () => {
  const [title, setTitle] = React.useState("");
  const location = useLocation();

  React.useEffect(() => {
    const { pathname } = location;
    switch (pathname) {
      case "/account/post":
        setTitle("Post your photo");
        break;
      case "/account/statistics":
        setTitle("Statistics");
        break;
      default:
        setTitle('My account');
    }
  }, [location]);

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
