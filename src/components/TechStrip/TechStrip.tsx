import React from 'react';
import { SiDjango, SiGit, SiLaravel, SiMysql, SiNextdotjs, SiPostgresql, SiPython, SiReact, SiTypescript } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

import { StripItem, StripList, StripSection } from './TechStripStyles';

// Only technologies demonstrated in shipped projects belong here - see
// src/constants/skills.ts for the full skills breakdown and the separate
// "exploring" list of target-role technologies not yet demonstrated.
const items = [
  { label: 'Python', Icon: SiPython },
  { label: 'Django', Icon: SiDjango },
  { label: 'Laravel', Icon: SiLaravel },
  { label: 'React', Icon: SiReact },
  { label: 'Next.js', Icon: SiNextdotjs },
  { label: 'TypeScript', Icon: SiTypescript },
  { label: 'PostgreSQL', Icon: SiPostgresql },
  { label: 'MySQL', Icon: SiMysql },
  { label: 'REST APIs', Icon: TbApi },
  { label: 'Git', Icon: SiGit },
];

const TechStrip = () => (
  <StripSection aria-label="Technologies I work with">
    <StripList>
      {items.map(({ label, Icon }) => (
        <StripItem key={label}>
          <Icon size="1.6rem" aria-hidden="true" />
          {label}
        </StripItem>
      ))}
    </StripList>
  </StripSection>
);

export default TechStrip;
