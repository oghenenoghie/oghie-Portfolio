import styled from 'styled-components';

export const ResumeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 24px;
  padding-top: 40px;

  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
    padding-top: 24px;
  }
`;

export const ResumeName = styled.h1`
  font-weight: 800;
  font-size: 48px;
  line-height: 56px;
  color: #fff;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 36px;
    line-height: 44px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 28px;
    line-height: 36px;
  }
`;

export const ResumeRole = styled.p`
  font-size: 20px;
  font-weight: 300;
  color: ${(props) => props.theme.colors.accent1};
  margin-top: 8px;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
  }
`;

export const ContactRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 16px;
`;

export const ContactMeta = styled.p`
  font-size: 15px;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 10px;
`;

export const ContactLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.3s ease;

  &:hover {
    color: #fff;
  }
`;

export const ResumeActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  height: fit-content;

  @media print {
    display: none;
  }
`;

export const PrintButton = styled.button`
  color: #fff;
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.33);
  border-radius: 999px;
  padding: 12px 24px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: 0.4s ease;
  height: fit-content;

  &:hover {
    color: #000;
    background: #fff;
    border: 1px solid #fff;
  }

  @media print {
    display: none;
  }
`;

export const DownloadButton = styled(PrintButton).attrs({ as: 'a' })`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
`;

export const ResumeSection = styled.div`
  margin-top: 48px;

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 32px;
  }
`;

export const ResumeSectionTitle = styled.h2`
  font-weight: 700;
  font-size: 24px;
  color: #fff;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 0.04em;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 18px;
    margin-bottom: 12px;
  }
`;

export const ResumeParagraph = styled.p`
  font-size: 16px;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.6);

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
  }
`;

export const ExperienceList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  border-left: 2px solid rgba(255, 255, 255, 0.15);
`;

export const ExperienceItem = styled.li`
  position: relative;
  padding-left: 24px;

  &::before {
    content: '';
    position: absolute;
    left: -7px;
    top: 6px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #fff;
  }
`;

export const EntryTitle = styled.h3`
  font-weight: 700;
  font-size: 18px;
  color: #fff;
`;

export const EntryMeta = styled.p`
  font-size: 15px;
  color: ${(props) => props.theme.colors.accent1};
  margin-top: 2px;
`;

export const EntryStack = styled.p`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 6px;
`;

export const BulletList = styled.ul`
  list-style: disc;
  padding-left: 20px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 6px;

  li {
    list-style: disc;
    font-size: 15px;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.7);

    @media ${(props) => props.theme.breakpoints.sm} {
      font-size: 14px;
    }
  }
`;

export const LinkRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 10px;
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
  }
`;

export const SkillCategory = styled.div``;

export const SkillCategoryTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.accent1};
  margin-bottom: 12px;
`;

export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Tag = styled.span`
  font-size: 14px;
  padding: 6px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.75);
`;

export const ProjectsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ProjectItem = styled.div`
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

export const ProjectLink = styled.a`
  font-size: 14px;
  color: ${(props) => props.theme.colors.accent1};
  transition: 0.3s ease;

  &:hover {
    color: #fff;
  }
`;

export const CertGroup = styled.div`
  & + & {
    margin-top: 24px;
  }
`;
