import React from 'react';

import { siteConfig } from '../../constants/siteConfig';
import { Section, SectionTitle } from '../../styles/GlobalComponents';
import { Paragraph, ParagraphList } from './AboutStyles';

const About = () => (
  <Section id="about">
    <SectionTitle>About</SectionTitle>
    <ParagraphList>
      {siteConfig.aboutSummary.map((paragraph) => (
        <Paragraph key={paragraph}>{paragraph}</Paragraph>
      ))}
    </ParagraphList>
  </Section>
);

export default About;
