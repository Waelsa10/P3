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
          src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Gemini-2.5-flash-image-preview_%28nano-banana%29_a_make_it_with_white_b.png"
          alt="swifttalk Logo"
        />
        <StyledButton 
          variant="outlined" 
          onClick={signIn}
          disabled={loading}
          darkMode={darkMode}
          startIcon={
            <GoogleLogo 
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" 
              alt="Google logo"
            />
          }
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
  padding: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${props => props.darkMode 
    ? 'rgba(30, 30, 30, 0.7)' 
    : 'rgba(255, 255, 255, 0.7)'};
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-radius: 24px;
  border: 1px solid ${props => props.darkMode 
    ? 'rgba(255, 255, 255, 0.1)' 
    : 'rgba(255, 255, 255, 0.5)'};
  box-shadow: ${props => props.darkMode 
    ? '0 8px 32px 0 rgba(0, 0, 0, 0.37)' 
    : '0 8px 32px 0 rgba(31, 38, 135, 0.15)'};
  transition: all 0.3s ease;
`;

const Logo = styled.img`
  height: 400px;
  width: 400px;
  margin-bottom: 50px;
  filter: ${props => props.darkMode ? 'brightness(0.9)' : 'none'};
`;

const GoogleLogo = styled.img`
  width: 18px;
  height: 18px;
`;

const StyledButton = styled(Button)`
  && {
    width: 100%;
    padding: 12px 24px;
    background-color: white;
    color: #3c4043;
    border: 1px solid #dadce0;
    border-radius: 8px;
    font-weight: 500;
    font-size: 14px;
    text-transform: none;
    box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3);
    transition: all 0.15s ease-in-out;
    
    &:hover {
      background-color: #f8f9fa;
      border-color: #d2e3fc;
      box-shadow: 0 1px 3px 0 rgba(60, 64, 67, 0.3);
    }

    &:active {
      background-color: #f1f3f4;
      box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3);
    }

    &:disabled {
      background-color: #f1f3f4;
      color: #9aa0a6;
      border-color: #dadce0;
      box-shadow: none;
      cursor: not-allowed;
    }

    .MuiButton-startIcon {
      margin-right: 12px;
    }
  }
`;

const ErrorText = styled.p`
  color: ${props => props.darkMode ? '#ff6b6b' : '#d32f2f'};
  margin-top: 10px;
  font-size: 14px;
`;