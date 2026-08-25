import React from 'react';

import { achievements } from '../../constants/achievements';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const Acomplishments = () => (
  <Section id="achievements">
    <SectionTitle>Achievements</SectionTitle>
    <Boxes>
      {achievements.map((card) => (
        <Box key={card.text}>
          <BoxNum>{`${card.number}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider />
  </Section>
);

export default Acomplishments;
