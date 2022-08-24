import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Dropdown from "./headerComponents/Dropdown";
import Tab from "./headerComponents/Tab";

const Header = ({ path }) => {
  // dropdown and handleClick for dropdown on smaller screens
  const [dropDown, setDropDown] = useState(false);
  const handleClick = () => {
    setDropDown(!dropDown);
  };

  return (
    <header className="header">
      <summary className="title-box">
        <h1 className="">Perfect Pup</h1>
        <h6 className="">Find your new best friend</h6>
      </summary>

      <nav className="nav">
        {/* for mobile */}
        <div className="nav-button">
          <IconButton onClick={handleClick}>
            <MenuIcon sx={{ color: "#f0ecec" }} />
          </IconButton>
        </div>
        {dropDown && (
          <div className="dropdown">
            <Dropdown stateChange={setDropDown} style={{ zIndex: "1000" }} />
          </div>
        )}

        {/* for tablet and destop */}
        <div className="nav-bar">
          <Tab page="home" path={path} />
          <Tab page="search" path={path} />
          <Tab page="about" path={path} />
          <Tab page="tips" path={path} />
          <Tab page="contact" path={path} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
