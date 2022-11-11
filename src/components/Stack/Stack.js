import React from 'react';
import { FaLaptopCode } from 'react-icons/fa';
import { FcCommandLine, FcDisplay } from "react-icons/fc";
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './StackStyles';

const Stack = () =>  (
  <Section id='stack' name='stack'>
    <SectionDivider/>
    <br />
    <SectionTitle>Stack</SectionTitle>
    <SectionText>I have primarily worked with HTML, JavaScript, Java and C# in the development world.</SectionText>
  <List>
    <ListItem>
      <FcDisplay size="6rem"/>
      <ListContainer>
        <ListTitle>Front-End</ListTitle>
        <ListParagraph>
          Experience with <br /> 
          HTML, CSS and JavaScript.
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <FcCommandLine size="6rem"/>
    <ListContainer>
      <ListTitle>Back-End</ListTitle>
        <ListParagraph>
          Experience with <br /> 
          Java and C#.
        </ListParagraph>
</ListContainer>
    </ListItem>
  </List>
  </Section>
);

export default Stack;
