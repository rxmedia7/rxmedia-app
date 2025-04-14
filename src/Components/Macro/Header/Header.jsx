import React, { useState, useEffect, useRef } from "react";
import './Header.css';

function Header({ toggleBtnRef }) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isNightMode, setNightMode] = useState(false);
  const modalRef = useRef(null);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const toggleNightMode = () => {
    setNightMode(!isNightMode);
  };

  // Add/remove night class to body
  useEffect(() => {
    document.body.classList.toggle('night', isNightMode);
  }, [isNightMode]);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(e.target) &&
        !e.target.classList.contains("avatar")
      ) {
        setModalVisible(false);
      }
    };

    if (isModalVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalVisible]);

  return (
    <header>
      <nav>
        <img
          ref={toggleBtnRef}
          src="/assets/icons/sidebar_btn.svg"
          alt="sidebar_icon"
          className="s_icon"
        />
        <div></div>
        <div className="usermenu">
          <p id="username">Admin</p>
          <img
            src="/assets/icons/profile.svg"
            alt="avatar"
            className="avatar"
            onClick={toggleModal}
          />
        </div>
      </nav>

      {/* Popup */}
      <div
        ref={modalRef}
        className={`user_modal ${isModalVisible ? "visible" : ""}`}
      >
        <div className="nightmode">
          <p>Kunduzgi rejim</p>
          <label className="switch">
            <input
              type="checkbox"
              id="checkbox"
              checked={isNightMode}
              onChange={toggleNightMode}
            />
            <span className="slider"></span>
          </label>
        </div>
        <button className="logout-btn">Hisobdan chiqish</button>
      </div>
    </header>
  );
}

export default Header;
