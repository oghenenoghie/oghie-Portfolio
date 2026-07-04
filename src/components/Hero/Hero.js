import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, I&apos;m Gabriel <br />
          Web Developer &amp; Designer
        </SectionTitle>
        <SectionText>
          I build full-stack web applications and client websites - from school and training management systems to eCommerce platforms - and teach others to code along the way.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;