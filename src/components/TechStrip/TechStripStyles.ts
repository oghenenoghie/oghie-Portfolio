import styled from 'styled-components';

export const StripSection = styled.section`
  max-width: 1040px;
  margin: 0 auto;
  padding: 2.4rem 48px 3.2rem;
  box-sizing: content-box;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1.6rem 16px 2rem;
    width: calc(100vw - 32px);
  }
`;

export const StripList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 1.6rem;
  list-style: none;
`;

export const StripItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 1.4rem;
  color: rgba(255, 255, 255, 0.6);
  transition: 0.2s ease;

  &:hover {
    color: rgba(255, 255, 255, 0.95);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.2rem;
  }
`;
