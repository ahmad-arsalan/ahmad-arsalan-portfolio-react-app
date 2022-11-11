
import React, { useState, useRef, useEffect } from 'react';
import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './ExperienceStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';

const Experience = () => {
 
return (
    <Section id='experience' name='experience'>
      <SectionDivider/>
      <br />
      <SectionTitle>Experience</SectionTitle>
      <SectionText> I have experience making and deploying console applications, as well as creating and deploying 
      web pages. All using my primary Stack consisting of HTML, CSS, JavaScript, Java and C#. 
      Prior to entering the tech field I have varying experience in a wide variety of industries such as 
      transportation, retail and customer service.
</SectionText>
    </Section>
  );
};

export default Experience;

