import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { Row, RowLabel, Tag, TagList } from './AIEnabledStyles';

const practicing = [
  'AI pair-programming on production codebases',
  'AI-assisted refactoring & code review',
  'Retrieval-augmented generation with the Claude API (hybrid search, reranking, cited answers)',
];
const exploring = ['Agentic / multi-step AI workflows', 'Natural-language interfaces'];

const AIEnabled = () => (
  <Section id="ai">
    <SectionTitle>Building Software in the AI Era</SectionTitle>
    <SectionText>
      I use modern AI development tools to accelerate development, explore solutions and build intelligent
      features - while maintaining engineering discipline around architecture, security, testing and code
      quality. I&apos;m a software developer who integrates AI into real-world applications, not an AI researcher.
    </SectionText>
    <Row>
      <RowLabel>Practicing today</RowLabel>
      <TagList>
        {practicing.map((item) => (
          <Tag key={item}>{item}</Tag>
        ))}
      </TagList>
    </Row>
    <Row>
      <RowLabel>Working toward</RowLabel>
      <TagList>
        {exploring.map((item) => (
          <Tag key={item} $muted>
            {item}
          </Tag>
        ))}
      </TagList>
    </Row>
  </Section>
);

export default AIEnabled;
