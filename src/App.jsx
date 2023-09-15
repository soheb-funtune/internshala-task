import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import styled, { createGlobalStyle } from "styled-components";
import Main from "./components/main/main";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div style={{ height: "100vh", background: "tomato" }}>
        <Main />
      </div>
    </>
  );
}

export default App;
