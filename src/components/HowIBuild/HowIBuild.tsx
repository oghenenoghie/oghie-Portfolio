import React from 'react';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { Grid, Step, StepNumber, StepText, StepTitle } from './HowIBuildStyles';

const steps = [
  { title: 'Understand the Problem', text: "Start from the real business or user problem, not the tech - and be clear on what 'correct' looks like." },
  { title: 'Design the Architecture', text: 'Sketch the data model, API boundaries, and where security and roles live before writing application code.' },
  { title: 'Build APIs & Backend', text: 'Implement the backend and REST APIs first, with the data model and business rules as the source of truth.' },
  { title: 'Build the User Interface', text: 'Layer a responsive, accessible front-end on top of the API, rather than starting from the UI.' },
  { title: 'Secure the Application', text: 'Add authentication, authorization and input validation as part of the build, not an afterthought.' },
  { title: 'Test', text: 'Write unit and integration tests around the logic that must not break - especially calculations and access rules.' },
  { title: 'Deploy', text: 'Ship through CI, with the build, typecheck and tests gating every deploy.' },
  { title: 'Monitor & Improve', text: 'Watch what breaks in production and feed it back into the next iteration.' },
];

const HowIBuild = () => (
  <Section id="how-i-build">
    <SectionDivider $divider />
    <SectionTitle>How I Build Software</SectionTitle>
    <SectionText>My working process from problem to production, not just from keyboard to browser.</SectionText>
    <Grid>
      {steps.map((step, index) => (
        <Step key={step.title}>
          <StepNumber aria-hidden="true">{String(index + 1).padStart(2, '0')}</StepNumber>
          <div>
            <StepTitle>{step.title}</StepTitle>
            <StepText>{step.text}</StepText>
          </div>
        </Step>
      ))}
    </Grid>
  </Section>
);

export default HowIBuild;
