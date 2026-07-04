import Head from 'next/head';

import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Gabriel (oghenenoghie) - Web Developer & Designer Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Gabriel, a web developer, designer & instructor building full-stack applications and client websites - including a School Management System, Training LMS, and eCommerce platform."
        />
        <meta property="og:title" content="Gabriel (oghenenoghie) - Web Developer & Designer Portfolio" />
        <meta
          property="og:description"
          content="Full-stack web developer & designer portfolio - projects, technologies and contact info."
        />
        <meta property="og:type" content="website" />
      </Head>
      <Section $grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects />
      <Technologies />
      <Timeline />
      <Acomplishments />
    </Layout>
  );
};

export default Home;
