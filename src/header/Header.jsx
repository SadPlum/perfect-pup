import React from "react";
import { makeStyles } from "@mui/styles";

import PetsIcon from "@mui/icons-material/Pets";

const useStyles = makeStyles({
  header: {
    height: 75,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    background: "#C3C49E",
    margin: 0,
    paddingLeft: 12.5,
  },
  logo: {
    width: 50,
    height: 50,
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
  },
  title: {
    margin: "auto",
    paddingRight: 87.5,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: 75,
  },
  text: {
    height: "auto",
    margin: 0,
  },
  link: {
    color: "inherit",
  },
});

const Header = () => {
  const styles = useStyles();
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <a href="" className={styles.link}>
          <PetsIcon sx={{ fontSize: 50 }} />
        </a>
      </div>
      <div className={styles.title}>
        <h1 className={styles.text}>Perfect Pup</h1>
        <h6 className={styles.text}>Find your new best friend</h6>
      </div>
    </header>
  );
};

export default Header;
