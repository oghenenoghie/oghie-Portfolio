import React from 'react';
import { AiFillGithub, AiOutlineMail, AiOutlineTwitter } from 'react-icons/ai';

import { achievements } from '../../constants/achievements';
import { experienceTimeline } from '../../constants/experience';
import { projects } from '../../constants/projects';
import { skillCategories } from '../../constants/skills';
import { siteConfig } from '../../constants/siteConfig';
import { Section, SectionDivider } from '../../styles/GlobalComponents';
import {
  AchievementCard,
  AchievementNum,
  AchievementsGrid,
  AchievementText,
  ContactLink,
  ContactRow,
  ExperienceItem,
  ExperienceList,
  ExperienceYear,
  PrintButton,
  ProjectDescription,
  ProjectHeader,
  ProjectItem,
  ProjectLink,
  ProjectsList,
  ProjectTitle,
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

const Resume = () => (
  <Section $nopadding>
    <ResumeHeader>
      <div>
        <ResumeName>{siteConfig.name}</ResumeName>
        <ResumeRole>
          {siteConfig.role} &middot; {siteConfig.roleSecondary}
        </ResumeRole>
        <ContactRow>
          <ContactLink href={siteConfig.githubUrl} target="_blank" rel="noreferrer">
            <AiFillGithub size="1.4rem" /> github.com/{siteConfig.githubHandle}
          </ContactLink>
          <ContactLink href={siteConfig.twitterUrl} target="_blank" rel="noreferrer">
            <AiOutlineTwitter size="1.4rem" /> @oghie_c
          </ContactLink>
          <ContactLink href={`mailto:${siteConfig.email}`}>
            <AiOutlineMail size="1.4rem" /> {siteConfig.email}
          </ContactLink>
        </ContactRow>
      </div>
      <PrintButton type="button" onClick={handlePrint}>
        Print / Save as PDF
      </PrintButton>
    </ResumeHeader>

    <SectionDivider $divider />

    <ResumeSection>
      <ResumeSectionTitle>Summary</ResumeSectionTitle>
      {siteConfig.aboutSummary.map((paragraph) => (
        <ResumeParagraph key={paragraph}>{paragraph}</ResumeParagraph>
      ))}
    </ResumeSection>

    <ResumeSection>
      <ResumeSectionTitle>Experience</ResumeSectionTitle>
      <ExperienceList>
        {experienceTimeline
          .filter((item) => item.year !== 'Future')
          .reverse()
          .map((item) => (
          <ExperienceItem key={item.year}>
            <ExperienceYear>{item.year}</ExperienceYear>
            <ResumeParagraph>{item.text}</ResumeParagraph>
          </ExperienceItem>
        ))}
      </ExperienceList>
    </ResumeSection>

    <ResumeSection>
      <ResumeSectionTitle>Selected Projects</ResumeSectionTitle>
      <ProjectsList>
        {projects.map((project) => (
          <ProjectItem key={project.id}>
            <ProjectHeader>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectLink href={project.visit ?? project.source} target="_blank" rel="noreferrer">
                {project.visit ? 'Visit' : 'Source'}
              </ProjectLink>
            </ProjectHeader>
            <ProjectDescription>{project.description}</ProjectDescription>
            <TagList>
              {project.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </TagList>
          </ProjectItem>
        ))}
      </ProjectsList>
    </ResumeSection>

    <ResumeSection>
      <ResumeSectionTitle>Skills</ResumeSectionTitle>
      <SkillsGrid>
        {skillCategories.map((category) => (
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
      <ResumeSectionTitle>Achievements</ResumeSectionTitle>
      <AchievementsGrid>
        {achievements.map((item) => (
          <AchievementCard key={item.text}>
            <AchievementNum>{`${item.number}+`}</AchievementNum>
            <AchievementText>{item.text}</AchievementText>
          </AchievementCard>
        ))}
      </AchievementsGrid>
    </ResumeSection>
  </Section>
);

export default Resume;
