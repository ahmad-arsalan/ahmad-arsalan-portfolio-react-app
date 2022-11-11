import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { FaLaptopCode } from 'react-icons/fa';



import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
 <Container>
  <Div1>
    <Link legacyBehavior href={"/"}>
      <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: 20}}>
      <FaLaptopCode size={"3rem"}/> <span>Portfolio</span>
      </a>
    </Link>
  </Div1>
  <Div2>
    <li>
      <Link href={"#aboutme"}>
      <NavLink>About</NavLink>
      </Link>
    </li>
    <li>
      <Link href={"#stack"}>
      <NavLink>Stack</NavLink>
      </Link>
    </li>
    <li>
      <Link href={"#experience"}>
      <NavLink>Experience</NavLink>
      </Link>
    </li>
    <li>
      <Link href={"#education"}>
      <NavLink>Education</NavLink>
      </Link>
    </li>
    <li>
      <Link href={"#projects"}>
      <NavLink>Projects</NavLink>
      </Link>
    </li>
  </Div2>
  <Div3>
    <SocialIcons href='https://github.com/ahmad-arsalan'>
      <AiFillGithub size="3rem"/>
  </SocialIcons>
</Div3>
 </Container>
);

export default Header;
