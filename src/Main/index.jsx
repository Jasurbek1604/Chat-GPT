import React, { memo } from "react";
import { Container } from "./style";

const Main = ({ value }) => {
  const [isOpen, setIsOpen] = value;
  return (
    <Container isOpen={isOpen}>
      <button onClick={() => setIsOpen(!isOpen)}>click</button>
    </Container>
  );
};

export default memo(Main);
