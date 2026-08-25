import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { Tag, TagList } from './SecurityMindedStyles';

const practices = [
  'Secure authentication (Supabase Auth, MFA, JWT)',
  'Authorization / role-based access control',
  'Database-level Row-Level Security',
  'Input validation',
  'API security',
  'Secure password handling',
  'OWASP awareness',
  'Security-conscious architecture (audit trails, data masking)',
];

const SecurityMinded = () => (
  <Section id="security">
    <SectionTitle>Security-Minded Development</SectionTitle>
    <SectionText>
      Security isn&apos;t a separate step - it&apos;s part of how I design and build applications, from the
      database up. I don&apos;t claim professional cybersecurity expertise; this reflects practices I&apos;ve
      actually applied while building real systems.
    </SectionText>
    <TagList>
      {practices.map((item) => (
        <Tag key={item}>{item}</Tag>
      ))}
    </TagList>
  </Section>
);

export default SecurityMinded;
