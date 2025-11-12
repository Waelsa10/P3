// components/ChatScreen/components/LocationPreviewDialog.jsx
import React from "react";
import styled from "styled-components";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, CircularProgress } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import CancelIcon from "@mui/icons-material/Cancel";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

function LocationPreviewDialog({
  open,
  locationData,
  input,
  onInputChange,
  onCancel,
  onSend,
  isGettingLocation,
  darkMode,
}) {
  if (isGettingLocation) {
    return (
      <StyledDialog open={open} onClose={onCancel} maxWidth="sm" fullWidth darkMode={darkMode}>
        <DialogContent>
          <LoadingContainer>
            <CircularProgress />
            <LoadingText darkMode={darkMode}>Getting your location...</LoadingText>
          </LoadingContainer>
        </DialogContent>
      </StyledDialog>
    );
  }

  if (!locationData) return null;

  const mapUrl = `https://www.openstreetmap.org/?mlat=${locationData.latitude}&mlon=${locationData.longitude}#map=15/${locationData.latitude}/${locationData.longitude}`;

  return (
    <StyledDialog open={open} onClose={onCancel} maxWidth="sm" fullWidth darkMode={darkMode}>
      <DialogTitle>
        <TitleContainer>
          <LocationOnIcon style={{ color: "#f44336", marginRight: "8px" }} />
          Share Location
        </TitleContainer>
      </DialogTitle>

      <DialogContent>
        <MapContainer>
          <MapFrame
            src={`https://www.openstreetmap.org/export/embed.html?bbox=${locationData.longitude - 0.01},${locationData.latitude - 0.01},${locationData.longitude + 0.01},${locationData.latitude + 0.01}&layer=mapnik&marker=${locationData.latitude},${locationData.longitude}`}
            title="Location preview"
          />
        </MapContainer>
        
        <LocationInfo darkMode={darkMode}>
          <InfoRow>
            <strong>Latitude:</strong> {locationData.latitude.toFixed(6)}
          </InfoRow>
          <InfoRow>
            <strong>Longitude:</strong> {locationData.longitude.toFixed(6)}
          </InfoRow>
          <ViewMapLink href={mapUrl} target="_blank" rel="noopener noreferrer" darkMode={darkMode}>
            <OpenInNewIcon style={{ fontSize: 16, marginRight: 4 }} />
            View on OpenStreetMap
          </ViewMapLink>
        </LocationInfo>

        <TextField
          fullWidth
          placeholder="Add a message (optional)"
          value={input}
          onChange={(e) => onInputChange(e.target.value)}
          variant="outlined"
          margin="normal"
          InputProps={{
            style: {
              color: darkMode ? "#e0e0e0" : "#000",
              backgroundColor: darkMode ? "#2a2a2a" : "#fff",
            },
          }}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={onCancel} color="secondary" startIcon={<CancelIcon />}>
          Cancel
        </Button>
        <Button onClick={onSend} color="primary" variant="contained" startIcon={<SendIcon />}>
          Send Location
        </Button>
      </DialogActions>
    </StyledDialog>
  );
}

export default LocationPreviewDialog;

const StyledDialog = styled(Dialog)`
  .MuiDialog-paper {
    background-color: ${(props) => (props.darkMode ? "#1e1e1e" : "#fff")};
    color: ${(props) => (props.darkMode ? "#e0e0e0" : "#000")};
  }
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  gap: 16px;
`;

const LoadingText = styled.p`
  color: ${(props) => (props.darkMode ? "#e0e0e0" : "#333")};
  font-size: 16px;
  margin: 0;
`;

const MapContainer = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 8px;
  overflow: hidden;
  background: #f0f0f0;
  margin-bottom: 16px;
`;

const MapFrame = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

const LocationInfo = styled.div`
  padding: 16px;
  background-color: ${(props) => (props.darkMode ? "#2a2a2a" : "#f5f5f5")};
  border-radius: 8px;
  font-size: 14px;
  color: ${(props) => (props.darkMode ? "#e0e0e0" : "#333")};
`;

const InfoRow = styled.div`
  margin-bottom: 8px;
  line-height: 1.6;

  &:last-child {
    margin-bottom: 0;
  }
`;

const ViewMapLink = styled.a`
  display: inline-flex;
  align-items: center;
  margin-top: 12px;
  color: ${(props) => (props.darkMode ? "#4CAF50" : "#128C7E")};
  text-decoration: none;
  font-weight: 500;
  font-size: 13px;

  &:hover {
    text-decoration: underline;
  }
`;