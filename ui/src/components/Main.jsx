import React from "react";
import ServersList from "./ServersList";
import SearchForm from "./SearchForm";
import "../styles/Main.css";

const Main = ({
  serversList,
  handleSearchServer,
  filteredServersList,
  handleTurnOffServer,
  handleTurnOnServer,
  handleRebootServer,
}) => {
  return (
    <main className="main">
      <div className="main__topPanel">
        <div className="main__serversInfo">
          <h1 className="main__title">Servers</h1>
          <h2 className="main__serversNumber">
            Number of elements:{" "}
            {filteredServersList.length === 0
              ? serversList.length
              : filteredServersList.length}
          </h2>
        </div>
        <SearchForm handleSearchServer={handleSearchServer} />
      </div>
      <div className="main__bottomPanel">
        <ServersList
          serversList={serversList}
          filteredServersList={filteredServersList}
          handleTurnOffServer={handleTurnOffServer}
          handleTurnOnServer={handleTurnOnServer}
          handleRebootServer={handleRebootServer}
        />
      </div>
    </main>
  );
};

export default Main;
