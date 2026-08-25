import React, { Fragment } from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { Arrow, Caveat, Layer, LayerDetail, LayerName, Stack } from './ArchitectureStyles';

const layers = [
  { name: 'Frontend', detail: 'React / Next.js / TypeScript' },
  { name: 'REST API', detail: 'JWT-secured endpoints' },
  { name: 'Backend', detail: 'Laravel · Django / Django REST Framework' },
  { name: 'Database', detail: 'PostgreSQL · MySQL' },
  { name: 'Infrastructure', detail: 'Vercel · Supabase · GitHub Actions CI' },
];

const Architecture = () => (
  <Section id="architecture">
    <SectionTitle>How the Layers Fit Together</SectionTitle>
    <SectionText>
      A simplified view of how a typical application I build is layered - frontend, API, backend, data and
      infrastructure.
    </SectionText>
    <Stack>
      {layers.map((layer, index) => (
        <Fragment key={layer.name}>
          {index > 0 && <Arrow aria-hidden="true">↓</Arrow>}
          <Layer>
            <LayerName>{layer.name}</LayerName>
            <LayerDetail>{layer.detail}</LayerDetail>
          </Layer>
        </Fragment>
      ))}
    </Stack>
    <Caveat>
      Not every project uses every layer or technology shown - this reflects how the layers relate, not a single
      fixed stack applied to every project.
    </Caveat>
  </Section>
);

export default Architecture;
