import React, { memo } from "react";
import { Container, Wrapper, Message, Inputs, Menu, Bar } from "./style";
import bars from "../assets/bars.svg";
import x from "../assets/x-solid.svg";

const Main = ({ value }) => {
  const [isOpen, setIsOpen] = value;
  return (
    <Container isOpen={isOpen}>
      <Menu onClick={() => setIsOpen(!isOpen)}>
        <Bar src={isOpen ? x : bars} alt="" isOpen={isOpen} />
      </Menu>
      <Wrapper>
        <Message></Message>
        <Inputs></Inputs>
      </Wrapper>
    </Container>
  );
};

export default memo(Main);
