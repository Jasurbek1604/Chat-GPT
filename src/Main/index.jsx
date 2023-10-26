import React, { memo } from "react";
import {
  Container,
  Wrapper,
  Message,
  MainBottom,
  Menu,
  Bar,
  Form,
  Input,
  Button,
  Img,
  Text,
} from "./style";
import bars from "../assets/bars.svg";
import x from "../assets/x-solid.svg";
import send from "../assets/send.svg";

const Main = ({ value }) => {
  const [isOpen, setIsOpen] = value;
  return (
    <Container isOpen={isOpen}>
      <Menu onClick={() => setIsOpen(!isOpen)}>
        <Bar src={isOpen ? x : bars} alt="" isOpen={isOpen} />
      </Menu>
      <Wrapper>
        <Message></Message>
        <MainBottom>
          <Form>
            <Input type="text" placeholder="Send a message" />
            <Button>
              <Img src={send} alt="sent button" />
            </Button>
          </Form>
          <Text>
            ChatGPT may produce inaccurate information about people, place, or
            facts. ChatGPT April 16 Version
          </Text>
        </MainBottom>
      </Wrapper>
    </Container>
  );
};

export default memo(Main);
