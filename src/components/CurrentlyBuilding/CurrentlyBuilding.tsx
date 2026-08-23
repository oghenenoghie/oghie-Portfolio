import React from 'react';

import { currentlyBuilding } from '../../constants/currentlyBuilding';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { Card, CardText, CardTitle, Grid, StatusDot } from './CurrentlyBuildingStyles';

const CurrentlyBuilding = () => (
  <Section id="currently-building">
    <SectionTitle>Currently Building</SectionTitle>
    <SectionText>What&apos;s actively in progress right now, not just what shipped in the past.</SectionText>
    <Grid>
      {currentlyBuilding.map((item) => (
        <Card key={item.title}>
          <StatusDot>In progress</StatusDot>
          <CardTitle>{item.title}</CardTitle>
          <CardText>{item.text}</CardText>
        </Card>
      ))}
    </Grid>
  </Section>
);

export default CurrentlyBuilding;
