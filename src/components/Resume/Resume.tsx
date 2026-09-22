import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineDownload, AiOutlineGlobal, AiOutlineMail } from 'react-icons/ai';

import { cv, CvEntry } from '../../constants/cv';
import { siteConfig } from '../../constants/siteConfig';
import { Section, SectionDivider } from '../../styles/GlobalComponents';
import {
  BulletList,
  CertGroup,
  ContactLink,
  ContactMeta,
  ContactRow,
  DownloadButton,
  EntryMeta,
  EntryStack,
  EntryTitle,
  ExperienceItem,
  ExperienceList,
  LinkRow,
  PrintButton,
  ProjectItem,
  ProjectLink,
  ProjectsList,
  ResumeActions,
  ResumeHeader,
  ResumeName,
  ResumeParagraph,
  ResumeRole,
  ResumeSection,
  ResumeSectionTitle,
  SkillCategory,
  SkillCategoryTitle,
  SkillsGrid,
  Tag,
  TagList,
} from './ResumeStyles';

const handlePrint = () => {
  window.print();
};

const EntryBody = ({ entry }: { entry: CvEntry }) => (
  <>
    <EntryTitle>{entry.title}</EntryTitle>
    {entry.meta && <EntryMeta>{entry.meta}</EntryMeta>}
    {entry.stack && <EntryStack>{entry.stack.join(' · ')}</EntryStack>}
    <BulletList>
      {entry.bullets.map((bullet) => (
        <li key={bullet}>{bullet}</li>
      ))}
    </BulletList>
    {entry.links && (
      <LinkRow>
        {entry.links.map((link) => (
          <ProjectLink key={link.href} href={link.href} target="_blank" rel="noreferrer">
            {link.label} &rarr;
          </ProjectLink>
        ))}
      </LinkRow>
    )}
  </>
);

const Resume = () => (
  <Section $nopadding>
    <ResumeHeader>
      <div>
        <ResumeName>{cv.name}</ResumeName>
        <ResumeRole>{cv.headline}</ResumeRole>
        <ContactRow>
          <ContactLink href={`mailto:${siteConfig.email}`}>
            <AiOutlineMail size="1.4rem" /> {siteConfig.email}
          </ContactLink>
          <ContactLink href={cv.website.href} target="_blank" rel="noreferrer">
            <AiOutlineGlobal size="1.4rem" /> {cv.website.label}
          </ContactLink>
          <ContactLink href={siteConfig.githubUrl} target="_blank" rel="noreferrer">
            <AiFillGithub size="1.4rem" /> github.com/{siteConfig.githubHandle}
          </ContactLink>
          <ContactLink href={cv.linkedin.href} target="_blank" rel="noreferrer">
            <AiFillLinkedin size="1.4rem" /> {cv.linkedin.label}
          </ContactLink>
        </ContactRow>
        <ContactMeta>
          {cv.location} &middot; {cv.availability}
        </ContactMeta>
      </div>
      <ResumeActions>
        <DownloadButton href={siteConfig.resumePdfPath} download>
          <AiOutlineDownload size="1.6rem" aria-hidden="true" /> Download CV (PDF)
        </DownloadButton>
        <PrintButton type="button" onClick={handlePrint}>
          Print this page
        </PrintButton>
      </ResumeActions>
    </ResumeHeader>

    <SectionDivider $divider />

    <ResumeSection>
      <ResumeSectionTitle>Profile</ResumeSectionTitle>
      <ResumeParagraph>{cv.profile}</ResumeParagraph>
    </ResumeSection>

    <ResumeSection>
      <ResumeSectionTitle>Technical Skills</ResumeSectionTitle>
      <SkillsGrid>
        {cv.skills.map((category) => (
          <SkillCategory key={category.title}>
            <SkillCategoryTitle>{category.title}</SkillCategoryTitle>
            <TagList>
              {category.items.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </TagList>
          </SkillCategory>
        ))}
      </SkillsGrid>
    </ResumeSection>

    <ResumeSection>
      <ResumeSectionTitle>Experience</ResumeSectionTitle>
      <ExperienceList>
        {cv.experience.map((entry) => (
          <ExperienceItem key={entry.title}>
            <EntryBody entry={entry} />
          </ExperienceItem>
        ))}
      </ExperienceList>
    </ResumeSection>

    <ResumeSection>
      <ResumeSectionTitle>Selected Projects</ResumeSectionTitle>
      <ProjectsList>
        {cv.projects.map((entry) => (
          <ProjectItem key={entry.title}>
            <EntryBody entry={entry} />
          </ProjectItem>
        ))}
      </ProjectsList>
    </ResumeSection>

    <ResumeSection>
      <ResumeSectionTitle>Certifications</ResumeSectionTitle>
      {cv.certifications.map((group) => (
        <CertGroup key={group.title}>
          <EntryTitle>{group.title}</EntryTitle>
          {group.issuer && <EntryMeta>{group.issuer}</EntryMeta>}
          <BulletList>
            {group.items.map((cert) => (
              <li key={cert.name}>
                {cert.verifyUrl ? (
                  <ProjectLink href={cert.verifyUrl} target="_blank" rel="noreferrer">
                    {cert.name}
                  </ProjectLink>
                ) : (
                  cert.name
                )}
                {cert.via && ` (${cert.via})`} &mdash; {cert.date}
              </li>
            ))}
          </BulletList>
        </CertGroup>
      ))}
    </ResumeSection>

    <ResumeSection>
      <ResumeSectionTitle>Education</ResumeSectionTitle>
      {cv.education.map((entry) => (
        <CertGroup key={entry.title}>
          <EntryTitle>{entry.title}</EntryTitle>
          <EntryMeta>{entry.meta}</EntryMeta>
        </CertGroup>
      ))}
    </ResumeSection>

    <ResumeSection>
      <ResumeSectionTitle>Languages</ResumeSectionTitle>
      {cv.languages.map((language) => (
        <ResumeParagraph key={language}>{language}</ResumeParagraph>
      ))}
    </ResumeSection>
  </Section>
);

export default Resume;
