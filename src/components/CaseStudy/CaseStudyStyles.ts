import Link from 'next/link';
import styled from 'styled-components';

export const Wrapper = styled.article`
  padding-top: 3.2rem;
`;

export const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.4rem;
  color: rgba(255, 255, 255, 0.6);
  transition: 0.2s ease;

  &:hover,
  &:focus-visible {
    color: #fff;
  }
`;

export const Header = styled.header`
  margin-top: 2rem;
`;

export const TypeLabel = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 0.8rem;
`;

export const Title = styled.h1`
  font-weight: 800;
  font-size: 4.2rem;
  line-height: 1.1;
  color: #fff;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 3.2rem;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 2.6rem;
  }
`;

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin: 1.6rem 0;
`;

export const Tag = styled.li`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.3rem;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 999px;
  padding: 0.3rem 1rem;
`;

export const ButtonRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  margin: 1.6rem 0 3.2rem;
`;

export const PrimaryLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  color: #000;
  background: #fff;
  border-radius: 999px;
  padding: 1.1rem 2rem;
  font-weight: 600;
  font-size: 1.5rem;
  transition: 0.3s ease;

  &:hover,
  &:focus-visible {
    background: rgba(255, 255, 255, 0.8);
  }
`;

export const SecondaryLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  color: #fff;
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.33);
  border-radius: 999px;
  padding: 1.1rem 2rem;
  font-weight: 600;
  font-size: 1.5rem;
  transition: 0.3s ease;

  &:hover,
  &:focus-visible {
    background: #fff;
    color: #000;
    border-color: #fff;
  }
`;

export const SectionGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  padding-bottom: 4rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 3.2rem;
`;

export const CaseSection = styled.section``;

export const CaseSectionTitle = styled.h2`
  font-weight: 700;
  font-size: 1.6rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 1rem;
`;

export const CaseParagraph = styled.p<{ $muted?: boolean }>`
  font-size: 1.7rem;
  line-height: 1.6;
  font-weight: ${({ $muted }) => ($muted ? 400 : 300)};
  font-style: ${({ $muted }) => ($muted ? 'italic' : 'normal')};
  color: ${({ $muted }) => ($muted ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 255, 255, 0.85)')};
  max-width: 760px;
`;

export const FeatureList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  max-width: 760px;
`;

export const FeatureItem = styled.li`
  position: relative;
  padding-left: 1.6rem;
  font-size: 1.6rem;
  line-height: 1.5;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.85);

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.8rem;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #fff;
  }
`;

export const StackList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

export const StackTag = styled.li`
  color: rgba(255, 255, 255, 0.85);
  font-size: 1.4rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  padding: 0.6rem 1.2rem;
`;
