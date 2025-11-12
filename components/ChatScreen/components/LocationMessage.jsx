// components/ChatScreen/components/LocationMessage.jsx
import React from "react";
import styled from "styled-components";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

function LocationMessage({ location, darkMode }) {
  if (!location) return null;

  const { latitude, longitude, url } = location;
  const mapPreviewUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${longitude - 0.005},${latitude - 0.005},${longitude + 0.005},${latitude + 0.005}&layer=mapnik&marker=${latitude},${longitude}`;

  return (
    <LocationContainer darkMode={darkMode}>
      <MapPreview>
        <MapFrame
          src={mapPreviewUrl}
          title="Location"
          loading="lazy"
        />
      </MapPreview>
      
      <LocationInfo darkMode={darkMode}>
        <LocationIcon>
          <LocationOnIcon style={{ fontSize: 20, color: "#f44336" }} />
        </LocationIcon>
        <Coordinates darkMode={darkMode}>
          {latitude.toFixed(6)}, {longitude.toFixed(6)}
        </Coordinates>
      </LocationInfo>

      <ViewButton href={url} target="_blank" rel="noopener noreferrer" darkMode={darkMode}>
        <OpenInNewIcon style={{ fontSize: 16, marginRight: 4 }} />
        View on Maps
      </ViewButton>
    </LocationContainer>
  );
}

export default LocationMessage;

const LocationContainer = styled.div`
  max-width: 280px;
  border-radius: 8px;
  overflow: hidden;
  background-color: ${(props) => (props.darkMode ? "#2a2a2a" : "#f5f5f5")};
`;

const MapPreview = styled.div`
  width: 100%;
  height: 200px;
  background: #f0f0f0;
  position: relative;
`;

const MapFrame = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  pointer-events: none;
`;

const LocationInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  gap: 8px;
`;

const LocationIcon = styled.div`
  display: flex;
  align-items: center;
`;

const Coordinates = styled.span`
  font-size: 13px;
  color: ${(props) => (props.darkMode ? "#b0b0b0" : "#666")};
  font-family: monospace;
`;

const ViewButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: ${(props) => (props.darkMode ? "#128C7E" : "#25D366")};
  color: white;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => (props.darkMode ? "#0d6b5f" : "#1fa855")};
  }
`;