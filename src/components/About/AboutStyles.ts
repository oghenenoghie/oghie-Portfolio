import styled from 'styled-components';

export const ParagraphList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  max-width: 760px;
  padding-bottom: 1rem;
`;

export const Paragraph = styled.p`
  font-size: 1.8rem;
  line-height: 1.6;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.8);

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.5rem;
  }
`;
