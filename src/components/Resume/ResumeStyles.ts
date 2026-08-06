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
    color: #0f1624;
    background: #fff;
    border: 1px solid #fff;
  }

  @media print {
    display: none;
  }
`;

export const ResumeSection = styled.div`
  margin-top: 48px;

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 32px;
  }
`;

export const ResumeSectionTitle = styled.h3`
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
    background: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);
  }
`;

export const ExperienceYear = styled.p`
  font-weight: 700;
  font-size: 18px;
  color: #fff;
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
  }
`;

export const SkillCategory = styled.div``;

export const SkillCategoryTitle = styled.h4`
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

export const CoverageList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const CoverageItem = styled.div``;

export const CoverageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
`;

export const CoverageName = styled.span`
  font-size: 15px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.85);
`;

export const CoverageLevel = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.accent1};
`;

export const CoverageBarTrack = styled.div`
  width: 100%;
  height: 8px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  overflow: hidden;
`;

export const CoverageBarFill = styled.div<{ $level: number }>`
  width: ${(props) => `${props.$level}%`};
  height: 100%;
  border-radius: 999px;
  background: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);
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

export const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
`;

export const ProjectTitle = styled.h4`
  font-size: 18px;
  font-weight: 700;
  color: #fff;
`;

export const ProjectLink = styled.a`
  font-size: 14px;
  color: ${(props) => props.theme.colors.accent1};
  transition: 0.3s ease;

  &:hover {
    color: #fff;
  }
`;

export const ProjectDescription = styled.p`
  font-size: 15px;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.6);
  margin: 6px 0 12px;
`;

export const AchievementsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const AchievementCard = styled.div`
  text-align: center;
`;

export const AchievementNum = styled.p`
  font-size: 32px;
  font-weight: 800;
  background: linear-gradient(121.57deg, #ffffff 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const AchievementText = styled.p`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 4px;
`;
