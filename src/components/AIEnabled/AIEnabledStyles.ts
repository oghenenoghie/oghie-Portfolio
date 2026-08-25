import styled from 'styled-components';

export const Row = styled.div`
  margin-top: 2.4rem;
`;

export const RowLabel = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 1.2rem;
`;

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

export const Tag = styled.li<{ $muted?: boolean }>`
  font-size: 1.4rem;
  color: ${({ $muted }) => ($muted ? 'rgba(255, 255, 255, 0.5)' : 'rgba(255, 255, 255, 0.9)')};
  border: 1px ${({ $muted }) => ($muted ? 'dashed' : 'solid')} rgba(255, 255, 255, ${({ $muted }) => ($muted ? '0.25' : '0.2')});
  border-radius: 999px;
  padding: 0.5rem 1.4rem;
`;
