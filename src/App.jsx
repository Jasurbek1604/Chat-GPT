import React, { useMemo, useState } from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  display: flex;
`;

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container>
      <Sidebar value={[isOpen, setIsOpen]} />
      <Main value={[isOpen, setIsOpen]} />
      <h1>jasurbek</h1>
    </Container>
  );
};

export default App;
