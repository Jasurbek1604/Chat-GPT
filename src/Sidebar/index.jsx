import React, { memo } from "react";
import logo from "../assets/chatgpt.svg";
import add from "../assets/add-30.png";
import message from "../assets/message.svg";
import home from "../assets/home.svg";
import saved from "../assets/bookmark.svg";
import upg from "../assets/rocket.svg";
import bars from "../assets/bars.svg";
import x from "../assets/x-solid.svg";
import {
  Container,
  SideBarTop,
  SideBarBottom,
  Button,
  Logo,
  Span,
  Logos,
} from "./style";

import { Menu, Bar } from "../Body/style";

const Sidebar = ({ value }) => {
  const [isOpen, setIsOpen] = value;
  return (
    <Container isOpen={isOpen}>
      <SideBarTop isOpen={isOpen}>
        <Logos onClick={() => setIsOpen(false)}>
          <Logo src={logo} logo="true" alt="logo" />
          <Span isOpen={isOpen} title="true">
            ChatGPT
          </Span>
          {window.innerWidth < 600 && (
            <Menu onClick={() => setIsOpen(!isOpen)}>
              <Bar src={isOpen ? x : bars} alt="" isOpen={isOpen} />
            </Menu>
          )}
        </Logos>
        <Button New="true" onClick={() => setIsOpen(false)}>
          <Logo src={add} alt="New" />
          <Span isOpen={isOpen} New="true">
            New Chat
          </Span>
        </Button>
        <Button msg="true" onClick={() => setIsOpen(false)}>
          <Logo src={message} alt="" />
          <Span isOpen={isOpen}>What is Programming?</Span>
        </Button>
        <Button msg="true" onClick={() => setIsOpen(false)}>
          <Logo src={message} alt="" />
          <Span isOpen={isOpen}>How to use API?</Span>
        </Button>
      </SideBarTop>
      <SideBarBottom isOpen={isOpen}>
        <Button
          link="true"
          onClick={() => setIsOpen(false)}
          isOpen={!isOpen ? "New" : false}
        >
          <Logo src={home} alt="home" />
          <Span isOpen={isOpen}>Home</Span>
        </Button>
        <Button
          link="true"
          onClick={() => setIsOpen(false)}
          isOpen={!isOpen ? "New" : false}
        >
          <Logo src={saved} alt="home" />
          <Span isOpen={isOpen}>Saved</Span>
        </Button>
        <Button
          link="true"
          onClick={() => setIsOpen(!isOpen)}
          isOpen={!isOpen ? "New" : false}
        >
          <Logo src={upg} alt="home" />
          <Span isOpen={isOpen}>Upgrade to pro</Span>
        </Button>
      </SideBarBottom>
    </Container>
  );
};

export default memo(Sidebar);
