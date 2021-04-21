import React, { useRef, useState } from "react";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CloseIcon from "@material-ui/icons/Close";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Dropdown from "./Dropdown";

import "../styles/ServersListItem.css";

const ServersListItem = ({
  id,
  name,
  status,
  handleTurnOffServer,
  handleTurnOnServer,
  handleRebootServer,
}) => {
  const serverItem = useRef();
  const [isActive, setIsActive] = useState(false);
  const [classValue, setClassValue] = useState("inactive");

  // Function that toggle between visible and ivisible dropdown -->

  const toggleDropdown = () => {
    isActive ? setClassValue("inactive") : setClassValue("active");
    setIsActive(!isActive);
  };

  // <--
  return (
    <div className="serverItem" ref={serverItem}>
      <div className="serverItem__name">{name}</div>
      <div className="serverItem__status">
        {/* UI status updates*/}
        {status === "ONLINE" && (
          <>
            <FiberManualRecordIcon className="serverItem__icon green" />
            <p className="green">{status}</p>
          </>
        )}
        {status === "OFFLINE" && (
          <>
            <CloseIcon className="serverItem__icon red" />
            <p className="red">{status}</p>
          </>
        )}
        {status === "REBOOTING" && (
          <>
            <p className="grey">{`${status}...`}</p>
          </>
        )}
      </div>
      <div
        ref={serverItem}
        className="serverItem__dropdownContainer"
        onClick={() => toggleDropdown()}
      >
        <MoreHorizIcon className="serverItem__dropdownIcon grey" />
      </div>
      <Dropdown
        status={status}
        id={id}
        serverItem={serverItem}
        classValue={classValue}
        toggleDropdown={toggleDropdown}
        handleTurnOffServer={handleTurnOffServer}
        handleTurnOnServer={handleTurnOnServer}
        handleRebootServer={handleRebootServer}
      />
    </div>
  );
};

export default ServersListItem;
