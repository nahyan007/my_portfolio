import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: "20px",
          }}
        >
          <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink style={{ marginLeft: "8px" }}>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink style={{ marginLeft: "8px" }}>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink style={{ marginLeft: "8px" }}>About</NavLink>
        </Link>
      </li>
    </Div2>

    <Div3>
      <SocialIcons target="_blank" href="https://github.com/nahyan007">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons
        target="_blank"
        href="https://www.linkedin.com/in/al-ashraful-islam-shorif-8213b5267"
      >
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons
        target="_blank"
        href="mailto:alashrafulislamshorif@gmail.com"
      >
        <AiFillMail size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
