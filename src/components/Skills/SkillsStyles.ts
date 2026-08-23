import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.4rem;
  padding: 3.2rem 0 2rem;

  @media ${(props) => props.theme.breakpoints.lg} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    gap: 1.6rem;
  }
`;

export const Card = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 2rem;
  transition: 0.3s ease;

  &:hover {
    border-color: rgba(255, 255, 255, 0.3);
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #fff;
  margin-bottom: 1.2rem;
`;

export const ItemList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

export const Item = styled.li`
  font-size: 1.5rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.4;
`;

export const ExploringWrapper = styled.div`
  margin-top: 3.2rem;
  padding-top: 2.4rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

export const ExploringLabel = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: rgba(255, 255, 255, 0.4);
  margin-bottom: 1.2rem;
`;

export const ExploringList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

export const ExploringTag = styled.li`
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.5);
  border: 1px dashed rgba(255, 255, 255, 0.25);
  border-radius: 999px;
  padding: 0.4rem 1.2rem;
`;
