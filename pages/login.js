import React, { useState } from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Head from "next/head";
import { useRouter } from "next/router"; // Add this import

function Login() {
  const router = useRouter(); // Add router
  const [loading, setLoading] = useState(false); // Add loading state
  const [error, setError] = useState(""); // Add error state

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
    <Container>
      <Head>
        <title>Login</title>
      </Head>
      <LoginContainer>
        <Logo
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp Logo"
        />
        <Button 
          variant="outlined" 
          onClick={signIn}
          disabled={loading}
        >
          {loading ? "Signing in..." : "Sign in with Google"}
        </Button>
        {error && <ErrorText>{error}</ErrorText>}
      </LoginContainer>
    </Container>
  );
}

export default Login;

// Styled Components
const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: whitesmoke;
`;

const LoginContainer = styled.div`
  padding: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 4px 14px -3px rgba(0, 0, 0, 0.75);
`;

const Logo = styled.img`
  height: 200px;
  width: 200px;
  margin-bottom: 50px;
`;

const ErrorText = styled.p`
  color: red;
  margin-top: 10px;
  font-size: 14px;
`;