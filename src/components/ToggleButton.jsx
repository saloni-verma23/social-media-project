import React, { useState } from "react";
import { IoSunnySharp } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";
import styles from "./ToggleButton.module.css";

const ToggleButton = () => {
  const [isDay, setIsDay] = useState(true);

  const toggleTheme = () => {
    setIsDay(!isDay);
    document.body.style.backgroundColor = isDay ? "#2C3E50" : "#F5F5F5";
  };

  return (
    <div
      className={`toggle-container ${isDay ? "day" : "night"}`}
      onClick={toggleTheme}
    >
      <div className={`toggle-circle ${isDay ? "day-circle" : "night-circle"}`}>
        {isDay ? (
          <IoSunnySharp className={styles.icon} />
        ) : (
          <IoMoon className={styles.icon} />
        )}
      </div>
    </div>
  );
};

export default ToggleButton;
