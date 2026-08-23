import Head from 'next/head';

import About from '../components/About/About';
import Acomplishments from '../components/Acomplishments/Acomplishments';
import AIEnabled from '../components/AIEnabled/AIEnabled';
import Architecture from '../components/Architecture/Architecture';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Contact from '../components/Contact/Contact';
import CurrentlyBuilding from '../components/CurrentlyBuilding/CurrentlyBuilding';
import Hero from '../components/Hero/Hero';
import HowIBuild from '../components/HowIBuild/HowIBuild';
import Projects from '../components/Projects/Projects';
import SecurityMinded from '../components/SecurityMinded/SecurityMinded';
import Skills from '../components/Skills/Skills';
import TechStrip from '../components/TechStrip/TechStrip';
import Timeline from '../components/TimeLine/TimeLine';
import { siteConfig } from '../constants/siteConfig';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const TITLE = `${siteConfig.name} | ${siteConfig.role} | ${siteConfig.roleSecondary}`;
const DESCRIPTION = `Portfolio of ${siteConfig.name}, a full-stack software developer building business applications, REST APIs and modern web systems with Python, Laravel, Django, React and Next.js.`;

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href={siteConfig.canonicalUrl} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteConfig.canonicalUrl} />
        <meta property="og:image" content={`${siteConfig.canonicalUrl}/og-image.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content={`${siteConfig.canonicalUrl}/og-image.png`} />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: siteConfig.name,
              url: siteConfig.canonicalUrl,
              jobTitle: `${siteConfig.role} / ${siteConfig.roleSecondary}`,
              sameAs: [siteConfig.githubUrl, siteConfig.twitterUrl],
            }),
          }}
        />
      </Head>
      <Section $grid>
        <Hero />
        <BgAnimation />
      </Section>
      <TechStrip />
      <Projects />
      <HowIBuild />
      <Architecture />
      <Skills />
      <AIEnabled />
      <SecurityMinded />
      <CurrentlyBuilding />
      <About />
      <Timeline />
      <Acomplishments />
      <Contact />
    </Layout>
  );
};

export default Home;
