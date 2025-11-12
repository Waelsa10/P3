// components/ChatScreen/components/PollCreationDialog.jsx
import React from "react";
import styled from "styled-components";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  IconButton,
  Switch,
  FormControlLabel,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import PollIcon from "@mui/icons-material/Poll";

function PollCreationDialog({
  open,
  onClose,
  question,
  onQuestionChange,
  options,
  onOptionChange,
  onRemoveOption,
  allowMultipleAnswers,
  onAllowMultipleChange,
  onSend,
  isSending,
  darkMode,
}) {
  const validOptions = options.filter((opt) => opt.trim());
  const canSend = question.trim() && validOptions.length >= 2 && !isSending;

  return (
    <StyledDialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      darkMode={darkMode}
    >
      <DialogTitle darkMode={darkMode}>
        <TitleContainer>
          <TitleWithIcon>
            <PollIcon style={{ marginRight: 8, color: darkMode ? "#64b5f6" : "#1976d2" }} />
            Create Poll
          </TitleWithIcon>
          <IconButton onClick={onClose} size="small">
            <CloseIcon style={{ color: darkMode ? "#e0e0e0" : "inherit" }} />
          </IconButton>
        </TitleContainer>
      </DialogTitle>

      <StyledDialogContent darkMode={darkMode}>
        <Section>
          <SectionLabel darkMode={darkMode}>Question</SectionLabel>
          <StyledTextField
            fullWidth
            placeholder="Ask a question..."
            value={question}
            onChange={(e) => onQuestionChange(e.target.value)}
            autoFocus
            darkMode={darkMode}
            multiline
            maxRows={3}
          />
        </Section>

        <Section>
          <SectionLabel darkMode={darkMode}>Options</SectionLabel>
          <OptionsContainer>
            {options.map((option, index) => (
              <OptionRow key={index}>
                <OptionNumber darkMode={darkMode}>{index + 1}</OptionNumber>
                <StyledTextField
                  fullWidth
                  placeholder={`Option ${index + 1}`}
                  value={option}
                  onChange={(e) => onOptionChange(index, e.target.value)}
                  darkMode={darkMode}
                />
                {options.length > 2 && (
                  <IconButton
                    onClick={() => onRemoveOption(index)}
                    size="small"
                    disabled={option.trim() === "" && index === options.length - 1}
                  >
                    <DeleteIcon 
                      fontSize="small" 
                      style={{ color: darkMode ? "#d32f2f" : "#f44336" }} 
                    />
                  </IconButton>
                )}
              </OptionRow>
            ))}
          </OptionsContainer>
          <HelperText darkMode={darkMode}>
            {validOptions.length < 2 
              ? "Add at least 2 options" 
              : `${validOptions.length} options added`}
          </HelperText>
        </Section>

        <Section>
          <FormControlLabel
            control={
              <Switch
                checked={allowMultipleAnswers}
                onChange={(e) => onAllowMultipleChange(e.target.checked)}
                color="primary"
              />
            }
            label={
              <SwitchLabel darkMode={darkMode}>
                Allow multiple answers
              </SwitchLabel>
            }
          />
        </Section>
      </StyledDialogContent>

      <StyledDialogActions darkMode={darkMode}>
        <Button onClick={onClose} disabled={isSending} style={{ color: darkMode ? '#e0e0e0' : 'inherit' }}>
          Cancel
        </Button>
        <SendButton
          onClick={onSend}
          disabled={!canSend}
          variant="contained"
          darkMode={darkMode}
        >
          {isSending ? "Sending..." : "Send Poll"}
        </SendButton>
      </StyledDialogActions>
    </StyledDialog>
  );
}

export default PollCreationDialog;

// Styled Components
const StyledDialog = styled(Dialog)`
  .MuiDialog-paper {
    background-color: ${(props) => (props.darkMode ? "#1e1e1e" : "white")};
    color: ${(props) => (props.darkMode ? "#e0e0e0" : "black")};
  }
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
`;

const TitleWithIcon = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => (props.darkMode ? "#e0e0e0" : "black")};
`;

const StyledDialogContent = styled(DialogContent)`
  padding: 20px 24px !important;
  background-color: ${(props) => (props.darkMode ? "#1e1e1e" : "white")};
`;

const StyledDialogActions = styled(DialogActions)`
  padding: 16px 24px !important;
  background-color: ${(props) => (props.darkMode ? "#1e1e1e" : "white")};
  border-top: 1px solid ${(props) => (props.darkMode ? "#333" : "#e0e0e0")};
`;

const Section = styled.div`
  margin-bottom: 24px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionLabel = styled.div`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 12px;
  color: ${(props) => (props.darkMode ? "#b0b0b0" : "#666")};
`;

const StyledTextField = styled(TextField)`
  .MuiOutlinedInput-root {
    background-color: ${(props) => (props.darkMode ? "#2a2a2a" : "#f5f5f5")};
    color: ${(props) => (props.darkMode ? "#e0e0e0" : "black")};

    & fieldset {
      border-color: ${(props) => (props.darkMode ? "#444" : "#e0e0e0")};
    }

    &:hover fieldset {
      border-color: ${(props) => (props.darkMode ? "#555" : "#ccc")};
    }

    &.Mui-focused fieldset {
      border-color: ${(props) => (props.darkMode ? "#64b5f6" : "#1976d2")};
    }
  }

  .MuiOutlinedInput-input {
    color: ${(props) => (props.darkMode ? "#e0e0e0" : "black")};

    &::placeholder {
      color: ${(props) => (props.darkMode ? "#777" : "#999")};
      opacity: 1;
    }
  }
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const OptionRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const OptionNumber = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: ${(props) => (props.darkMode ? "#2a2a2a" : "#e3f2fd")};
  color: ${(props) => (props.darkMode ? "#64b5f6" : "#1976d2")};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
  flex-shrink: 0;
`;

const HelperText = styled.div`
  font-size: 12px;
  color: ${(props) => (props.darkMode ? "#888" : "#666")};
  margin-top: 8px;
`;

const SwitchLabel = styled.span`
  font-size: 14px;
  color: ${(props) => (props.darkMode ? "#e0e0e0" : "black")};
`;

const SendButton = styled(Button)`
  && {
    background-color: ${(props) => (props.darkMode ? "#00a884" : "#25d366")};
    color: white;

    &:hover {
      background-color: ${(props) => (props.darkMode ? "#008c6e" : "#1fa855")};
    }

    &:disabled {
      background-color: ${(props) => (props.darkMode ? "#2a2a2a" : "#e0e0e0")};
      color: ${(props) => (props.darkMode ? "#666" : "#999")};
    }
  }
`;