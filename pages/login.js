import React, { useState, useContext } from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Head from "next/head";
import { useRouter } from "next/router";
import { DarkModeContext } from "../components/DarkModeProvider";

function Login() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Get dark mode context
  const darkModeContext = useContext(DarkModeContext);
  const { darkMode } = darkModeContext || { darkMode: false };

  const signIn = async () => {
    try {
      setLoading(true);
      setError("");
      const result = await signInWithPopup(auth, provider);
      console.log("Sign in successful:", result.user);
      
      // Redirect to home page after successful login
      router.push("/");
    } catch (error) {
      console.error("Sign in error:", error);
      
      // Handle specific errors
      if (error.code === "auth/popup-blocked") {
        setError("Popup was blocked. Please allow popups for this site.");
      } else if (error.code === "auth/popup-closed-by-user") {
        setError("Sign in was cancelled.");
      } else {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container darkMode={darkMode}>
      <Head>
        <title>Login</title>
      </Head>
      <LoginContainer darkMode={darkMode}>
        <Logo
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp Logo"
        />
        <StyledButton 
          variant="outlined" 
          onClick={signIn}
          disabled={loading}
          darkMode={darkMode}
        >
          {loading ? "Signing in..." : "Sign in with Google"}
        </StyledButton>
        {error && <ErrorText darkMode={darkMode}>{error}</ErrorText>}
      </LoginContainer>
    </Container>
  );
}

export default Login;

// Styled Components with Dark Mode
const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: ${props => props.darkMode ? '#0d1117' : 'whitesmoke'};
  transition: background-color 0.3s ease;
`;

const LoginContainer = styled.div`
  padding: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.darkMode ? '#1e1e1e' : 'white'};
  border-radius: 5px;
  box-shadow: ${props => props.darkMode 
    ? '0px 4px 14px -3px rgba(0, 0, 0, 0.9)' 
    : '0px 4px 14px -3px rgba(0, 0, 0, 0.75)'};
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
`;

const Logo = styled.img`
  height: 200px;
  width: 200px;
  margin-bottom: 50px;
  filter: ${props => props.darkMode ? 'brightness(0.9)' : 'none'};
`;

const StyledButton = styled(Button)`
  && {
    color: ${props => props.darkMode ? '#90caf9' : '#1976d2'};
    border-color: ${props => props.darkMode ? '#90caf9' : '#1976d2'};
    
    &:hover {
      background-color: ${props => props.darkMode ? 'rgba(144, 202, 249, 0.08)' : 'rgba(25, 118, 210, 0.04)'};
      border-color: ${props => props.darkMode ? '#64b5f6' : '#1565c0'};
    }

    &:disabled {
      color: ${props => props.darkMode ? '#666' : '#bdbdbd'};
      border-color: ${props => props.darkMode ? '#666' : '#bdbdbd'};
    }
  }
`;

const ErrorText = styled.p`
  color: ${props => props.darkMode ? '#ff6b6b' : '#d32f2f'};
  margin-top: 10px;
  font-size: 14px;
`;