import styled from 'styled-components';

export const Stack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  max-width: 560px;
  margin: 3.2rem auto 2rem;
`;

export const Layer = styled.div`
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 10px;
  padding: 1.6rem 2rem;
  text-align: center;
  transition: 0.3s ease;

  &:hover {
    border-color: rgba(255, 255, 255, 0.4);
  }
`;

export const LayerName = styled.p`
  font-size: 1.6rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.4rem;
`;

export const LayerDetail = styled.p`
  font-size: 1.3rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.6);
`;

export const Arrow = styled.div`
  font-size: 1.8rem;
  color: rgba(255, 255, 255, 0.35);
  line-height: 1;
  padding: 0.6rem 0;
`;

export const Caveat = styled.p`
  max-width: 700px;
  margin: 1.2rem auto 0;
  font-size: 1.4rem;
  font-weight: 300;
  font-style: italic;
  color: rgba(255, 255, 255, 0.45);
  text-align: center;
`;
