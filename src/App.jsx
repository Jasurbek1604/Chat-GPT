import React, { useMemo, useState } from "react";
import Sidebar from "./Sidebar";
import Main from "./Body";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  display: flex;
`;

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [newChat, setNewChat] = useState(false);
  return (
    <Container>
      <Sidebar value={([isOpen, setIsOpen], [newChat, setNewChat])} />
      <Main value={([isOpen, setIsOpen], [newChat, setNewChat])} />
    </Container>
  );
};

export default App;
