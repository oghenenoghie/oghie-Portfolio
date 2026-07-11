import React from 'react';
import { AiFillGithub, AiOutlineMail, AiOutlineTwitter } from 'react-icons/ai';

import { projects, TimeLineData } from '../../constants/constants';
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

const skills = [
  { title: 'Front-End', items: ['Next.js', 'React', 'TypeScript', 'styled-components'] },
  { title: 'Back-End', items: ['Python (Django/Flask)', 'Laravel', 'MySQL', 'REST APIs'] },
  { title: 'Design', items: ['Figma', 'Web & Graphic Design', 'Responsive UI'] },
];

const achievements = [
  { number: 20, text: 'GitHub Repositories' },
  { number: 4, text: 'Full-Stack Projects Built' },
  { number: 3, text: 'Client Websites Delivered' },
  { number: 2, text: 'Years Building Software' },
];

const handlePrint = () => {
  window.print();
};

const Resume = () => (
  <Section $nopadding>
    <ResumeHeader>
      <div>
        <ResumeName>Gabriel (oghenenoghie)</ResumeName>
        <ResumeRole>Web Developer, Designer &amp; Instructor</ResumeRole>
        <ContactRow>
          <ContactLink href="https://github.com/oghenenoghie" target="_blank" rel="noreferrer">
            <AiFillGithub size="1.4rem" /> github.com/oghenenoghie
          </ContactLink>
          <ContactLink href="https://twitter.com/oghie_c" target="_blank" rel="noreferrer">
            <AiOutlineTwitter size="1.4rem" /> @oghie_c
          </ContactLink>
          <ContactLink href="mailto:ogenenoghie@gmail.com">
            <AiOutlineMail size="1.4rem" /> ogenenoghie@gmail.com
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
      <ResumeParagraph>
        Web developer, designer and instructor building full-stack applications and client websites - from school and
        training management systems to eCommerce platforms - and teaching others to code along the way.
      </ResumeParagraph>
    </ResumeSection>

    <ResumeSection>
      <ResumeSectionTitle>Experience</ResumeSectionTitle>
      <ExperienceList>
        {[...TimeLineData].reverse().map((item) => (
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
        {skills.map((category) => (
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
