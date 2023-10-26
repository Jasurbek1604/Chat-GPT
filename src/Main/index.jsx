import React, { memo } from "react";
import { Container } from "./style";
import bars from "../assets/bars.svg";
import x from "../assets/x-solid.svg";

const Main = ({ value }) => {
  const [isOpen, setIsOpen] = value;
  return (
    <Container isOpen={isOpen}>
      <div onClick={() => setIsOpen(!isOpen)}>
        <img
          src={isOpen ? x : bars}
          alt=""
          width={isOpen ? 20 : 30}
          style={{ margin: "10px" }}
        />
      </div>
    </Container>
  );
};

export default memo(Main);
