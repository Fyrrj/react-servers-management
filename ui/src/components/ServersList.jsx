import React from "react";
import ServersListItem from "./ServersListItem";
import "../styles/ServersList.css";

const ServersList = ({
  serversList,
  filteredServersList,
  handleTurnOffServer,
  handleTurnOnServer,
  handleRebootServer,
}) => {
  // Function that swaps between unfiltered servers list and filtered servers list -->

  const chooseWorkflowServer = () => {
    let workflowServer = serversList;
    if (filteredServersList.length > 0) {
      workflowServer = filteredServersList;
    } else {
      workflowServer = serversList;
    }
    return workflowServer;
  };

  // <--

  return (
    <div className="serversList">
      <div className="serversList__topLabel">
        <p className="serversList__label">Name</p>
        <p className="serversList__label">Status</p>
      </div>
      {chooseWorkflowServer().map((server) => (
        <ServersListItem
          id={server.id}
          name={server.name}
          status={server.status}
          key={server.id + Math.random()}
          handleTurnOffServer={handleTurnOffServer}
          handleTurnOnServer={handleTurnOnServer}
          handleRebootServer={handleRebootServer}
        />
      ))}
    </div>
  );
};

export default ServersList;
