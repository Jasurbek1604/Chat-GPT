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
  MessageFrom,
} from "./style";
import bars from "../assets/bars.svg";
import x from "../assets/x-solid.svg";
import send from "../assets/send.svg";
import jasco from "../assets/jasco.jpg";
import chat from "../assets/chatgptLogo.svg";

const Main = ({ value }) => {
  const [isOpen, setIsOpen] = value;
  return (
    <Container isOpen={isOpen}>
      <Menu onClick={() => setIsOpen(!isOpen)}>
        <Bar src={isOpen ? x : bars} alt="" isOpen={isOpen} />
      </Menu>
      <Wrapper>
        <Message>
          <MessageFrom>
            <Img src={jasco} user="true" />
            <Text user="true">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
              deserunt ullam soluta rem dignissimos aliquid ab laborum veritatis
              adipisci culpa?
            </Text>
          </MessageFrom>
          <MessageFrom gpt="true">
            <Img src={chat} user="true" />
            <Text user="true">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              consequatur numquam consequuntur, magnam distinctio ipsa, aliquid
              ipsum quidem, commodi cupiditate molestiae sunt impedit nisi
              reiciendis accusamus necessitatibus porro. Eligendi perferendis
              ipsum tempora minima? Corporis modi quasi amet, temporibus porro,
              doloremque omnis maiores quia delectus unde repellat optio
              expedita voluptatum nobis voluptates est blanditiis neque dolorum,
              mollitia reprehenderit ex. Quisquam ipsam eveniet vel? Labore,
              nulla! Voluptatem harum ex facilis eaque ratione possimus culpa
              magnam nulla, adipisci, consectetur ipsum? Nulla minima labore
              nihil, velit voluptatibus odio amet magni itaque, molestias, id
              eum quia earum. Nisi maiores tempore unde explicabo, magni
              voluptate neque ipsam inventore aspernatur dolorem eligendi in
              architecto animi cupiditate harum quis, nam corporis esse eaque
              repudiandae impedit incidunt omnis a fuga. t
            </Text>
          </MessageFrom>
        </Message>
        <MainBottom>
          <Form>
            <Input type="text" placeholder="Send a message" />
            <Button>
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
