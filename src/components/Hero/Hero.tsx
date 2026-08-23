import React from 'react';
import { AiFillGithub, AiOutlineDownload } from 'react-icons/ai';

import { siteConfig } from '../../constants/siteConfig';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { CtaGroup, CtaPrimary, CtaSecondary, CtaTertiary, FocusLine, LeftSection, StatusDot, StatusPill } from './HeroStyles';

const scrollToProjects = () => {
  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
};

const Hero = () => (
  <Section $row $nopadding>
    <LeftSection>
      <StatusPill>
        <StatusDot aria-hidden="true" />
        {siteConfig.status}
      </StatusPill>
      <SectionTitle as="h1" $main>
        Hi, I&apos;m {siteConfig.name.split(' ')[0]}
        <br />
        {siteConfig.role}
      </SectionTitle>
      <FocusLine>{siteConfig.focusAreas.join(' • ')}</FocusLine>
      <SectionText>{siteConfig.heroSummary}</SectionText>
      <CtaGroup>
        <CtaPrimary type="button" onClick={scrollToProjects}>
          View My Projects
        </CtaPrimary>
        <CtaSecondary href={siteConfig.resumePdfPath} download>
          <AiOutlineDownload size="1.8rem" aria-hidden="true" /> Download CV
        </CtaSecondary>
        <CtaTertiary href={siteConfig.githubUrl} target="_blank" rel="noreferrer">
          <AiFillGithub size="1.8rem" aria-hidden="true" /> GitHub
        </CtaTertiary>
      </CtaGroup>
    </LeftSection>
  </Section>
);

export default Hero;
