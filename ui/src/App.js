import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import "./App.css";

const App = () => {
  const [serversList, setServersList] = useState([]);
  const [filteredServersList, setFilteredServersList] = useState([]);
  const [specyficServer, setSpecyficServer] = useState({});
  const [numberOfServers, setNumberOfServers] = useState(0);

  //Data fetching -->

  useEffect(() => {
    const fetchServersData = async () => {
      const res = await fetch("http://localhost:4454/servers");
      const data = await res.json();
      setServersList(data);
    };
    fetchServersData();
  }, [specyficServer]);

  // <-- Filtering servers by name -->

  const handleSearchServer = (e) => {
    let searchValue = e.target.value.toLowerCase();
    const newServerList = [...serversList];
    setFilteredServersList(
      newServerList.filter((server) =>
        server.name.toLowerCase().includes(searchValue)
      )
    );
  };

  // <-- Api call about turning off server with specyfic id -->

  const handleTurnOffServer = async (id) => {
    await fetch(`http://localhost:4454/servers/${id}/off`, {
      method: "put",
    });
    setSpecyficServer(serversList[id - 1]);
    specyficServer.status = "OFFLINE";
  };

  // <-- Api call about turning on server with specyfic id -->

  const handleTurnOnServer = async (id) => {
    await fetch(`http://localhost:4454/servers/${id}/on`, {
      method: "put",
    });
    setSpecyficServer(serversList[id - 1]);
    specyficServer.status = "ONLINE";
  };

  // <-- Api call about rebooting server with specyfic id -->

  const handleRebootServer = async (id) => {
    console.log(`Rebooting server id: ${id}`);
    await fetch(`http://localhost:4454/servers/${id}/reboot`, {
      method: "put",
    });
    setSpecyficServer(serversList[id - 1]);
    const ping = setInterval(async () => {
      const res = await fetch(`http://localhost:4454/servers/${id}`);
      const data = await res.json();
      if (data.status === "ONLINE") {
        clearInterval(ping);
        specyficServer.status = data.status;
        setSpecyficServer(data);
      }
    }, 1000);
  };

  // <--

  return (
    <div className="app">
      <Header />
      <Main
        serversList={serversList}
        handleSearchServer={handleSearchServer}
        handleTurnOffServer={handleTurnOffServer}
        handleTurnOnServer={handleTurnOnServer}
        handleRebootServer={handleRebootServer}
        filteredServersList={filteredServersList}
        numberOfServers={numberOfServers}
      />
    </div>
  );
};

export default App;
