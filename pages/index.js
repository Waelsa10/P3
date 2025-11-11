import Head from "next/head";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import { useContext } from "react";
import { DarkModeContext } from "../components/DarkModeProvider";

export default function Home() {
  const darkModeContext = useContext(DarkModeContext);
  const { darkMode } = darkModeContext || { darkMode: false };

  return (
    <Container darkMode={darkMode}>
      <Head>
        <title>Your Chats</title>
      </Head>
      <Sidebar />
    </Container>
  );
}

const Container = styled.div`
  background-color: ${props => props.darkMode ? '#1e1e1e' : 'white'};
  min-height: 100vh;
`;