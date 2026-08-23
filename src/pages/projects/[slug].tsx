import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

import CaseStudy from '../../components/CaseStudy/CaseStudy';
import { Project, projects } from '../../constants/projects';
import { siteConfig } from '../../constants/siteConfig';
import { Layout } from '../../layout/Layout';

interface ProjectPageProps {
  project: Project;
}

const ProjectPage = ({ project }: ProjectPageProps) => {
  const pageUrl = `${siteConfig.canonicalUrl}/projects/${project.slug}`;
  const title = `${project.title} - Case Study | ${siteConfig.name}`;
  const description = project.description;

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={`${siteConfig.canonicalUrl}/og-image.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${siteConfig.canonicalUrl}/og-image.png`} />
      </Head>
      <CaseStudy project={project} />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: projects.map((project) => ({ params: { slug: project.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<ProjectPageProps> = async ({ params }) => {
  const project = projects.find((p) => p.slug === params?.slug);

  if (!project) {
    return { notFound: true };
  }

  return { props: { project } };
};

export default ProjectPage;
