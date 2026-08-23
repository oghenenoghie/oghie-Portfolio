import React from 'react';
import { AiFillGithub, AiOutlineDownload, AiOutlineLinkedin, AiOutlineMail } from 'react-icons/ai';

import { siteConfig } from '../../constants/siteConfig';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { ButtonRow, PrimaryLink, SecondaryLink } from './ContactStyles';

const Contact = () => (
  <Section id="contact">
    <SectionTitle>Let&apos;s Build Something Useful</SectionTitle>
    <SectionText>
      I&apos;m open to software engineering opportunities, backend/full-stack roles, freelance engineering
      projects and collaborations.
    </SectionText>
    <ButtonRow>
      <PrimaryLink href={`mailto:${siteConfig.email}`}>
        <AiOutlineMail size="1.8rem" aria-hidden="true" /> Email Me
      </PrimaryLink>
      <SecondaryLink href={siteConfig.githubUrl} target="_blank" rel="noreferrer">
        <AiFillGithub size="1.8rem" aria-hidden="true" /> GitHub
      </SecondaryLink>
      {siteConfig.linkedinUrl && (
        <SecondaryLink href={siteConfig.linkedinUrl} target="_blank" rel="noreferrer">
          <AiOutlineLinkedin size="1.8rem" aria-hidden="true" /> LinkedIn
        </SecondaryLink>
      )}
      <SecondaryLink href={siteConfig.resumePdfPath} download>
        <AiOutlineDownload size="1.8rem" aria-hidden="true" /> Download CV
      </SecondaryLink>
    </ButtonRow>
  </Section>
);

export default Contact;
