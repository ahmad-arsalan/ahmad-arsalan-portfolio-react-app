import React, { useState, useRef, useEffect } from 'react';
import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './AboutStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';

const About = () => {
 
return (
    <Section id='about' name='aboutme'>
      <SectionTitle>About Me</SectionTitle>
      <SectionText>My name is Ahmad Arsalan, I am currently a student at Robertson College enrolled in the full stack developing diploma program.
      I have primarily worked with Stack such as HTML,CSS, JavaScript, Java and C#. I love learning more everyday and getting better. 
      I believe that there is always a solution to every problem, it just depends on how bad you want to find it. My long-term goal is to break-off
      into developing mobile applications that revolve around self-improvement and tracking/visualizing stats for personal performance and goals.
</SectionText>
    </Section>
  );
};

export default About;
