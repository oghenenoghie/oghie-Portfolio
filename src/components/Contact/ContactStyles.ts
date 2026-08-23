import styled from 'styled-components';

export const ButtonRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  margin-top: 2.4rem;
`;

export const PrimaryLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  color: #000;
  background: #fff;
  border-radius: 999px;
  padding: 1.4rem 2.4rem;
  font-weight: 600;
  font-size: 1.6rem;
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
  padding: 1.4rem 2.4rem;
  font-weight: 600;
  font-size: 1.6rem;
  transition: 0.3s ease;

  &:hover,
  &:focus-visible {
    background: #fff;
    color: #000;
    border-color: #fff;
  }
`;
