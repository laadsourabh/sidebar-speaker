import React, { useState } from "react";
import "./App.scss";
import SpeakerSidebar from "./components/SpeakerSidebar/SpeakerSidebar";
import avatar from "./images/avatar.png";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const speakers = [
    {
      name: "Eleanor Pena",
      position: "President of Sales",
      organization: "XYZ Organisation",
      avatar: avatar,
    },
    {
      name: "Esther Howard",
      position: "Marketing Coordinator",
      organization: "XYZ Organisation",
      avatar: avatar,
    },
  ];

  const handleAddSpeaker = (selectedSpeakers) => {
    console.log("Selected Speakers:", selectedSpeakers);
  };

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const handleCancel = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="center-button-container">
      <button className="open-sidebar-btn" onClick={openSidebar}>
        Add Speaker
      </button>
      {isSidebarOpen && (
        <SpeakerSidebar
          speakers={speakers}
          onAddSpeaker={handleAddSpeaker}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
};

export default App;
