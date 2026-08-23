import React from 'react';

import { exploringSkills, skillCategories } from '../../constants/skills';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { Card, CardTitle, ExploringLabel, ExploringList, ExploringTag, ExploringWrapper, Grid, Item, ItemList } from './SkillsStyles';

const Skills = () => (
  <Section id="skills">
    <SectionDivider $divider />
    <SectionTitle>Engineering Skills</SectionTitle>
    <SectionText>
      Technologies I&apos;ve actually used to ship the projects on this site - organized by where they sit in a
      typical application.
    </SectionText>
    <Grid>
      {skillCategories.map((category) => (
        <Card key={category.title}>
          <CardTitle>{category.title}</CardTitle>
          <ItemList>
            {category.items.map((item) => (
              <Item key={item}>{item}</Item>
            ))}
          </ItemList>
        </Card>
      ))}
    </Grid>
    <ExploringWrapper>
      <ExploringLabel>Currently exploring (not yet used in a shipped project)</ExploringLabel>
      <ExploringList>
        {exploringSkills.map((skill) => (
          <ExploringTag key={skill}>{skill}</ExploringTag>
        ))}
      </ExploringList>
    </ExploringWrapper>
    <SectionDivider $colorAlt />
  </Section>
);

export default Skills;
