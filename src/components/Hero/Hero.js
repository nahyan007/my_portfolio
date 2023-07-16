import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding >
    <LeftSection>
      <SectionTitle main center >
          Welcome To <br />
          My Portfolio
      </SectionTitle>
      <SectionText>
      A React website developer. Crafting dynamic web experiences is my passion. With an eye for design and expertise in React, I create captivating and seamless interfaces that leave a lasting impact. Let's bring your vision to life with the power of React! Explore my work and let's collaborate.
      </SectionText>
      <Button onClick={()=>  window.location.href = `mailto:alashrafulislamshorif@gmail.com`} >Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;