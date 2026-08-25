import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
`;

export const StatusPill = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 1.3rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 999px;
  padding: 0.6rem 1.2rem;
  margin-top: 4rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 2.4rem;
    font-size: 1.2rem;
  }
`;

export const StatusDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #4ade80;
  box-shadow: 0 0 0 3px rgba(74, 222, 128, 0.2);
  flex-shrink: 0;

  @media (prefers-reduced-motion: no-preference) {
    animation: pulse 2s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.4; }
  }
`;

export const FocusLine = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 0.5rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.4rem;
  }
`;

export const CtaGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.2rem;
  margin-top: 2rem;
`;

export const CtaPrimary = styled.button`
  color: #000;
  background: #fff;
  border: 1px solid #fff;
  border-radius: 999px;
  padding: 1.4rem 2.4rem;
  font-weight: 600;
  font-size: 1.6rem;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover,
  &:focus-visible {
    background: rgba(255, 255, 255, 0.8);
  }
`;

export const CtaSecondary = styled.a`
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
  cursor: pointer;
  transition: 0.3s ease;

  &:hover,
  &:focus-visible {
    background: #fff;
    color: #000;
    border-color: #fff;
  }
`;

export const CtaTertiary = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  color: rgba(255, 255, 255, 0.75);
  font-weight: 600;
  font-size: 1.6rem;
  padding: 1.4rem 0.5rem;
  transition: 0.3s ease;

  &:hover,
  &:focus-visible {
    color: #fff;
  }
`;
