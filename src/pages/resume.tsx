import Head from 'next/head';

import Resume from '../components/Resume/Resume';
import { Layout } from '../layout/Layout';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.com';

const ResumePage = () => {
  return (
    <Layout>
      <Head>
        <title>Resume - Gabriel (oghenenoghie)</title>
        <meta
          name="description"
          content="Resume of Gabriel, a web developer, designer & instructor - experience, projects, and skills building full-stack applications and client websites."
        />
        <link rel="canonical" href={`${SITE_URL}/resume`} />
        <meta property="og:title" content="Resume - Gabriel (oghenenoghie)" />
        <meta
          property="og:description"
          content="Experience, projects, and skills - web developer, designer & instructor."
        />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content={`${SITE_URL}/resume`} />
        <meta property="og:image" content={`${SITE_URL}/og-image.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Resume - Gabriel (oghenenoghie)" />
        <meta
          name="twitter:description"
          content="Experience, projects, and skills - web developer, designer & instructor."
        />
        <meta name="twitter:image" content={`${SITE_URL}/og-image.png`} />
      </Head>
      <Resume />
    </Layout>
  );
};

export default ResumePage;
