import React, { useRef } from "react";
import { ClickAwayListener } from "@material-ui/core";
import "../styles/Dropdown.css";

const Dropdown = ({
  id,
  status,
  classValue,
  toggleDropdown,
  handleTurnOffServer,
  handleTurnOnServer,
  handleRebootServer,
}) => {
  const dropdownRef = useRef();

  return (
    <ClickAwayListener
      onClickAway={() => {
        /*I had a problem with toggle dropdown off here ;( */
      }}
    >
      <div
        className={`dropdown ${classValue}`}
        ref={dropdownRef}
        onClick={() => {
          toggleDropdown(id);
        }}
      >
        {status === "ONLINE" && (
          <>
            <button
              className="dropdown__button"
              onClick={() => handleTurnOffServer(id)}
            >
              Turn off
            </button>
            <button
              className="dropdown__button"
              onClick={() => handleRebootServer(id)}
            >
              Reboot
            </button>
          </>
        )}
        {status === "OFFLINE" && (
          <>
            <button
              className="dropdown__button"
              onClick={() => handleTurnOnServer(id)}
            >
              Turn on
            </button>
          </>
        )}
      </div>
    </ClickAwayListener>
  );
};

export default Dropdown;
