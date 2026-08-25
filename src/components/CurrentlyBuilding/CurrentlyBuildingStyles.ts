import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 3.2rem 0 2rem;

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 2rem;
`;

export const StatusDot = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 1rem;

  &::before {
    content: '';
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #4ade80;
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.7rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.6rem;
`;

export const CardText = styled.p`
  font-size: 1.4rem;
  font-weight: 300;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.65);
`;
