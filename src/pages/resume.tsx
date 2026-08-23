import Head from 'next/head';

import Resume from '../components/Resume/Resume';
import { siteConfig } from '../constants/siteConfig';
import { Layout } from '../layout/Layout';

const TITLE = `Resume - ${siteConfig.name} | ${siteConfig.role}`;
const DESCRIPTION = `Resume of ${siteConfig.name}, a full-stack software developer - experience, projects and skills across backend, APIs, and cloud deployment.`;

const ResumePage = () => {
  return (
    <Layout>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href={`${siteConfig.canonicalUrl}/resume`} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content={`${siteConfig.canonicalUrl}/resume`} />
        <meta property="og:image" content={`${siteConfig.canonicalUrl}/og-image.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content={`${siteConfig.canonicalUrl}/og-image.png`} />
      </Head>
      <Resume />
    </Layout>
  );
};

export default ResumePage;
