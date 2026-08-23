import Link from 'next/link';
import styled from 'styled-components';

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 3rem;
  place-items: stretch;
  column-gap: 2rem;
  row-gap: 3rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }
`;

export const BlogCard = styled.div<{ $featured?: boolean }>`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: 1px solid ${({ $featured }) => ($featured ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 255, 255, 0.1)')};
  box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.5);
  text-align: center;
  width: 400px;
  overflow: hidden;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;

export const FeaturedBadge = styled.span`
  position: absolute;
  top: 12px;
  left: 12px;
  font-size: 1.1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #000;
  background: #fff;
  border-radius: 999px;
  padding: 0.4rem 1rem;
`;

export const ImageWrapper = styled.div`
  position: relative;
  aspect-ratio: 16 / 9;
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1.5rem 2rem 2rem;
`;

export const TitleContent = styled.div`
  text-align: left;
  z-index: 20;
  width: 100%;
`;

export const TypeLabel = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 0.4rem;
`;

export const HeaderThree = styled.h3<{ $title?: boolean }>`
  font-weight: 600;
  letter-spacing: 0.01em;
  color: #ffffff;
  text-align: left;
  font-size: ${(props) => (props.$title ? '2.2rem' : '2rem')};
`;

export const Hr = styled.hr`
  width: 40px;
  height: 3px;
  margin: 16px 0;
  border: 0;
  background: #808080;
`;

export const CardInfo = styled.p`
  width: 100%;
  color: rgba(255, 255, 255, 0.75);
  font-size: 1.5rem;
  line-height: 24px;
  text-align: left;
  flex: 1;
`;

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  padding: 1.5rem 0 0;
`;

export const Tag = styled.li`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.3rem;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 999px;
  padding: 0.3rem 1rem;
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0 0;
`;

export const ExternalLinks = styled.a`
  color: #ffffff;
  font-size: 1.4rem;
  font-weight: 600;
  padding: 0.9rem 1.4rem;
  background: #333333;
  border-radius: 10px;
  transition: 0.3s;
  &:hover,
  &:focus-visible {
    background: #1a1a1a;
  }
`;

export const CaseStudyLink = styled(Link)`
  color: #000;
  font-size: 1.4rem;
  font-weight: 600;
  padding: 0.9rem 1.4rem;
  background: #ffffff;
  border-radius: 10px;
  transition: 0.3s;
  &:hover,
  &:focus-visible {
    background: rgba(255, 255, 255, 0.8);
  }
`;
