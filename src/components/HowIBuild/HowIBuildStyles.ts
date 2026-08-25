import styled from 'styled-components';

export const Grid = styled.ol`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.4rem 3.2rem;
  padding: 3.2rem 0 2rem;
  list-style: none;
  counter-reset: step;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const Step = styled.li`
  display: flex;
  gap: 1.6rem;
`;

export const StepNumber = styled.span`
  flex-shrink: 0;
  font-weight: 800;
  font-size: 2.2rem;
  color: rgba(255, 255, 255, 0.25);
  line-height: 1;
  min-width: 3.2rem;
`;

export const StepTitle = styled.h3`
  font-size: 1.7rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.4rem;
`;

export const StepText = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.65);
`;
