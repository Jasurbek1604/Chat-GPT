import React, { memo } from "react";
import logo from "../assets/chatgpt.svg";
import add from "../assets/add-30.png";
import message from "../assets/message.svg";
import home from "../assets/home.svg";
import saved from "../assets/bookmark.svg";
import upg from "../assets/rocket.svg";

import {
  Container,
  SideBarTop,
  SideBarBottom,
  Button,
  Logo,
  Span,
  Logos,
} from "./style";

const Sidebar = ({ value }) => {
  const [isOpen] = value;
  return (
    <Container isOpen={isOpen}>
      <SideBarTop>
        <Logos>
          <Logo src={logo} logo="true" alt="logo" />
          <Span isOpen={isOpen} title="true">
            ChatGPT
          </Span>
        </Logos>
        <Button add="true">
          <Logo src={add} alt="add" />
          <Span isOpen={isOpen} add="true">
            New Chat
          </Span>
        </Button>
        <Button msg="true">
          <Logo src={message} alt="" />
          <Span isOpen={isOpen}>What is Programming?</Span>
        </Button>
        <Button msg="true">
          <Logo src={message} alt="" />
          <Span isOpen={isOpen}>How to use API?</Span>
        </Button>
      </SideBarTop>
      <SideBarBottom>
        <Button link="true">
          <Logo src={home} alt="home" />
          <Span isOpen={isOpen}>Home</Span>
        </Button>
        <Button link="true">
          <Logo src={saved} alt="home" />
          <Span isOpen={isOpen}>Saved</Span>
        </Button>
        <Button link="true">
          <Logo src={upg} alt="home" />
          <Span isOpen={isOpen}>Upgrade to pro</Span>
        </Button>
      </SideBarBottom>
    </Container>
  );
};

export default memo(Sidebar);
