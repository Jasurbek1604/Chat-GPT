import React, { memo, useRef, useState } from "react";
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
  MessageFrom,
} from "./style";
import bars from "../assets/bars.svg";
import x from "../assets/x-solid.svg";
import send from "../assets/send.svg";
import jasco from "../assets/jasco.jpg";
import chat from "../assets/chatgptLogo.svg";

const Main = ({ value }) => {
  const [isOpen, setIsOpen] = value;
  const [newChat, setNewChat] = value;
  console.log(newChat);
  const inputRef = useRef();
  const [request, setRequest] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    setRequest([inputRef?.current?.value, ...request]);
    input.value = "";
  };

  return (
    <Container isOpen={isOpen}>
      <Menu onClick={() => setIsOpen(!isOpen)}>
        <Bar src={isOpen ? x : bars} alt="" isOpen={isOpen} />
      </Menu>
      <Wrapper>
        <Message>
          {request.length ? (
            request.map((e) => (
              <>
                <MessageFrom>
                  <Img src={jasco} user="true" />
                  <Text user="true">{e}</Text>
                </MessageFrom>
                <MessageFrom gpt="true">
                  <Img src={chat} user="true" />
                  <Text user="true" red="true">
                    Oooops!! ChatGPT is not working in your country!
                  </Text>
                </MessageFrom>
              </>
            ))
          ) : (
            <h1
              style={{
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                fontSize: "50px",
              }}
            >
              ChatGPT
            </h1>
          )}
        </Message>
        <MainBottom>
          <Form onSubmit={(e) => onSubmit(e)}>
            <Input
              type="text"
              ref={inputRef}
              placeholder="Send a message"
              defaultValue={""}
              id="input"
            />
            <Button onClick={(e) => onSubmit(e)}>
              <Img src={send} alt="sent button" />
            </Button>
          </Form>
          <Text txt="true">
            ChatGPT may produce inaccurate information about people, place, or
            facts. ChatGPT April 16 Version
          </Text>
        </MainBottom>
      </Wrapper>
    </Container>
  );
};

export default memo(Main);
