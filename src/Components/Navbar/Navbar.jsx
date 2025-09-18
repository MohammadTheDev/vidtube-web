import React, { useState } from "react";
import { Link } from "react-router-dom";
import menu_icon from "../../assets/menu.png";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search.png";
import upload_icon from "../../assets/upload.png";
import more_icon from "../../assets/more.png";
import notification_icon from "../../assets/notification.png";
import profile_icon from "../../assets/jack.png";
import "./Navbar.css";

const Navbar = ({ setSidebar }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchValue.trim()) {
      console.log("Searching for:", searchValue);
      // اینجا بعداً میشه redirect یا call به API بزنی
    }
  };

  return (
    <nav className="flex-div navbar">
      {/* Left Section */}
      <div className="nav-left flex-div">
        <button className="icon-btn" onClick={() => setSidebar((prev) => !prev)} aria-label="Toggle sidebar">
          <img className="menu-icon" src={menu_icon} alt="menu" />
        </button>

        <Link to="/" aria-label="Homepage">
          <img className="logo" src={logo} alt="logo" />
        </Link>
      </div>

      {/* Middle Section */}
      <div className="nav-middle flex-div">
        <form className="search-box flex-div" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            aria-label="Search"
          />
          <button type="submit" className="icon-btn" aria-label="Search">
            <img src={search_icon} alt="search" />
          </button>
        </form>
      </div>

      {/* Right Section */}
      <div className="nav-right flex-div">
        <button className="icon-btn" aria-label="Upload">
          <img src={upload_icon} alt="upload" />
        </button>
        <button className="icon-btn" aria-label="More options">
          <img src={more_icon} alt="more" />
        </button>
        <button className="icon-btn" aria-label="Notifications">
          <img src={notification_icon} alt="notifications" />
        </button>
        <button className="icon-btn" aria-label="Profile">
          <img src={profile_icon} className="user-icon" alt="profile" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
