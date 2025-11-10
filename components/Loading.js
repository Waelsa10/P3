import React from "react";
import { CircularProgress } from "@mui/material";
import styled from "styled-components";

function Loading() {
  return (
    <Container>
      <SpinnerWrapper>
        <Logo
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png"
          alt="Logo"
        />
        <CircularProgress color="success" size={60} />
      </SpinnerWrapper>
    </Container>
  );
}

export default Loading;

// Styled Components
const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: whitesmoke;
`;

const SpinnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
  height: 200px;
  width: 200px;
  margin-bottom: 20px;
`;
