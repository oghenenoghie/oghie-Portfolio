import React from 'react';

import { projects } from '../../constants/projects';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import {
  BlogCard,
  CardBody,
  CardInfo,
  CaseStudyLink,
  ExternalLinks,
  FeaturedBadge,
  GridContainer,
  HeaderThree,
  Hr,
  ImageWrapper,
  Img,
  Tag,
  TagList,
  TitleContent,
  TypeLabel,
  UtilityList,
} from './ProjectsStyles';

const Projects = () => (
  <Section $nopadding id="projects">
    <SectionDivider />
    <SectionTitle $main>Featured Projects</SectionTitle>
    <SectionText>
      Real, shipped systems - prioritizing engineering depth (architecture, data, security) over visual polish.
    </SectionText>
    <GridContainer>
      {projects.map((p) => (
        <BlogCard key={p.id} $featured={p.featured}>
          <ImageWrapper>
            {p.featured && <FeaturedBadge>Featured</FeaturedBadge>}
            <Img src={p.image} alt={`${p.title} preview`} />
          </ImageWrapper>
          <CardBody>
            <TitleContent>
              <TypeLabel>{p.type}</TypeLabel>
              <HeaderThree $title>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo>{p.description}</CardInfo>
            <TagList>
              {p.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </TagList>
            <UtilityList>
              <CaseStudyLink href={`/projects/${p.slug}`}>Case Study</CaseStudyLink>
              {p.visit && (
                <ExternalLinks href={p.visit} target="_blank" rel="noreferrer">
                  Live Demo
                </ExternalLinks>
              )}
              <ExternalLinks href={p.source} target="_blank" rel="noreferrer">
                GitHub
              </ExternalLinks>
            </UtilityList>
          </CardBody>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;
