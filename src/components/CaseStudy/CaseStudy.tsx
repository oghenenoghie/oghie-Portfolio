import React from 'react';
import { AiFillGithub, AiOutlineArrowLeft, AiOutlineLink } from 'react-icons/ai';

import { NOT_DOCUMENTED, Project } from '../../constants/projects';
import { Section } from '../../styles/GlobalComponents';
import {
  BackLink,
  ButtonRow,
  CaseParagraph,
  CaseSection,
  CaseSectionTitle,
  FeatureItem,
  FeatureList,
  Header,
  PrimaryLink,
  SecondaryLink,
  SectionGrid,
  StackList,
  StackTag,
  Tag,
  TagList,
  Title,
  TypeLabel,
  Wrapper,
} from './CaseStudyStyles';

const Paragraph = ({ text }: { text: string }) => <CaseParagraph $muted={text === NOT_DOCUMENTED}>{text}</CaseParagraph>;

const CaseStudy = ({ project }: { project: Project }) => {
  const { caseStudy } = project;

  return (
    <Section>
    <Wrapper>
      <BackLink href="/#projects">
        <AiOutlineArrowLeft aria-hidden="true" /> Back to Projects
      </BackLink>

      <Header>
        <TypeLabel>{project.type}</TypeLabel>
        <Title>{project.title}</Title>
        <TagList>
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </TagList>
        <ButtonRow>
          {project.visit && (
            <PrimaryLink href={project.visit} target="_blank" rel="noreferrer">
              <AiOutlineLink aria-hidden="true" /> Live Demo
            </PrimaryLink>
          )}
          <SecondaryLink href={project.source} target="_blank" rel="noreferrer">
            <AiFillGithub aria-hidden="true" /> GitHub
          </SecondaryLink>
        </ButtonRow>
      </Header>

      <SectionGrid>
        <CaseSection>
          <CaseSectionTitle>Overview</CaseSectionTitle>
          <Paragraph text={caseStudy.overview} />
        </CaseSection>

        <CaseSection>
          <CaseSectionTitle>Problem</CaseSectionTitle>
          <Paragraph text={caseStudy.problem} />
        </CaseSection>

        <CaseSection>
          <CaseSectionTitle>Solution</CaseSectionTitle>
          <Paragraph text={caseStudy.solution} />
        </CaseSection>

        <CaseSection>
          <CaseSectionTitle>Key Features</CaseSectionTitle>
          <FeatureList>
            {caseStudy.keyFeatures.map((feature) => (
              <FeatureItem key={feature}>{feature}</FeatureItem>
            ))}
          </FeatureList>
        </CaseSection>

        <CaseSection>
          <CaseSectionTitle>Technology Stack</CaseSectionTitle>
          <StackList>
            {caseStudy.techStack.map((tech) => (
              <StackTag key={tech}>{tech}</StackTag>
            ))}
          </StackList>
        </CaseSection>

        <CaseSection>
          <CaseSectionTitle>Architecture</CaseSectionTitle>
          <Paragraph text={caseStudy.architecture} />
        </CaseSection>

        <CaseSection>
          <CaseSectionTitle>Database</CaseSectionTitle>
          <Paragraph text={caseStudy.database} />
        </CaseSection>

        <CaseSection>
          <CaseSectionTitle>API / Backend</CaseSectionTitle>
          <Paragraph text={caseStudy.api} />
        </CaseSection>

        <CaseSection>
          <CaseSectionTitle>Authentication &amp; Authorization</CaseSectionTitle>
          <Paragraph text={caseStudy.authAndAuthorization} />
        </CaseSection>

        <CaseSection>
          <CaseSectionTitle>Security</CaseSectionTitle>
          <Paragraph text={caseStudy.security} />
        </CaseSection>

        <CaseSection>
          <CaseSectionTitle>Challenges</CaseSectionTitle>
          <Paragraph text={caseStudy.challenges} />
        </CaseSection>

        <CaseSection>
          <CaseSectionTitle>What I Learned</CaseSectionTitle>
          <Paragraph text={caseStudy.whatILearned} />
        </CaseSection>

        <CaseSection>
          <CaseSectionTitle>Future Improvements</CaseSectionTitle>
          <Paragraph text={caseStudy.futureImprovements} />
        </CaseSection>

        <CaseSection>
          <CaseSectionTitle>Live Demo</CaseSectionTitle>
          {project.visit ? (
            <PrimaryLink href={project.visit} target="_blank" rel="noreferrer">
              <AiOutlineLink aria-hidden="true" /> {project.visit.replace(/^https?:\/\//, '')}
            </PrimaryLink>
          ) : (
            <CaseParagraph $muted>No public live demo for this project yet.</CaseParagraph>
          )}
        </CaseSection>

        <CaseSection>
          <CaseSectionTitle>GitHub</CaseSectionTitle>
          <SecondaryLink href={project.source} target="_blank" rel="noreferrer">
            <AiFillGithub aria-hidden="true" /> {project.source.replace(/^https?:\/\//, '')}
          </SecondaryLink>
        </CaseSection>
      </SectionGrid>
    </Wrapper>
    </Section>
  );
};

export default CaseStudy;
