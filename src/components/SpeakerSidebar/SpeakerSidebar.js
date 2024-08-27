import React, { useState } from "react";
import "./SpeakerSidebar.scss";
import Edit from "../../images/edit.png";
import searchIcon from "../../images/searchIcon.png";

const SpeakerSidebar = ({ speakers, onAddSpeaker, onCancel }) => {
  const [selectedSpeakers, setSelectedSpeakers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSelectSpeaker = (speaker) => {
    const isSelected = selectedSpeakers.includes(speaker);
    if (isSelected) {
      setSelectedSpeakers(selectedSpeakers.filter((s) => s !== speaker));
    } else {
      setSelectedSpeakers([...selectedSpeakers, speaker]);
    }
  };

  const handleCancel = () => {
    setSelectedSpeakers([]);
  };

  const handleSearch = (event) => {
    setSearchQuery(event?.target?.value);
  };

  const filteredSpeakers = searchQuery
    ? speakers.filter(
        (speaker) =>
          speaker?.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          speaker?.position
            ?.toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          speaker?.organization
            ?.toLowerCase()
            .includes(searchQuery.toLowerCase())
      )
    : speakers;

  return (
    <div className="sidebar-container">
      <div className="sidebar-overlay"></div>
      <div className="sidebar">
        <div className="sidebar-header sticky">
          <h2>Add Speaker</h2>
          <button className="close-btn" onClick={onCancel}>
            X
          </button>
        </div>

        <div className="sidebar-content">
          <div className="search-container">
            <img src={searchIcon} alt="search-icon" className="search-icon" />
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
          <ul className="speakers-list">
            {filteredSpeakers?.map((speaker, index) => (
              <li
                key={index}
                className={`speaker-item ${
                  selectedSpeakers.includes(speaker) ? "selected" : ""
                }`}
                onClick={() => handleSelectSpeaker(speaker)}
              >
                <div className="speaker-info">
                  <img src={speaker.avatar} alt={`${speaker.name}'s Avatar`} />
                  <div className="speaker-details">
                    <h4>{speaker.name}</h4>
                    <p>
                      {speaker.position} | {speaker.organization}
                    </p>
                    <img src={Edit} alt="edit" className="edit-img" />
                    <button className="edit-btn">Edit Speaker</button>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={selectedSpeakers.includes(speaker)}
                  onChange={() => handleSelectSpeaker(speaker)}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="sidebar-footer sticky">
          <button
            className="add-btn"
            onClick={() => onAddSpeaker(selectedSpeakers)}
            disabled={selectedSpeakers.length === 0}
          >
            Add
          </button>
          <button className="cancel-btn" onClick={handleCancel}>
            Cancel
          </button>
          <button className="create-btn">Create a speaker</button>
        </div>
      </div>
    </div>
  );
};

export default SpeakerSidebar;
