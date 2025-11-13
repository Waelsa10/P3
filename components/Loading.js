import React from "react";
import styled, { keyframes } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

function Loading() {
  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="text-center">
        <DotsContainer className="d-flex justify-content-center gap-2 mb-3">
          <Dot className="bg-primary" delay="0s" />
          <Dot className="bg-primary" delay="0.15s" />
          <Dot className="bg-primary" delay="0.3s" />
        </DotsContainer>
        
        <p className="text-secondary fw-normal">Connecting...</p>
      </div>
    </Container>
  );
}

export default Loading;

const bounce = keyframes`
  0%, 80%, 100% { 
    transform: scale(0.8);
    opacity: 0.5;
  }
  40% { 
    transform: scale(1.2);
    opacity: 1;
  }
`;

const Container = styled.div`
  background-color: #ffffff;
`;

const DotsContainer = styled.div``;

const Dot = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  animation: ${bounce} 1.4s infinite ease-in-out;
  animation-delay: ${props => props.delay};
`;