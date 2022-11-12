import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To<br/>
        My Dev Portfolio
      </SectionTitle>
      <SectionText>
        The purpose of this portfolio is to show who I am as a dev, what I have done and how I can be an asset to you.
      </SectionText>
      <Button onClick={() => window.location.href = 'https://github.com/ahmad-arsalan'}>Git Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;