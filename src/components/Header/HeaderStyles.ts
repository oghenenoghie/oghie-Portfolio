import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.2rem 2rem;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1rem 1.2rem;
  }
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #fff;
  font-weight: 700;
  font-size: 1.8rem;
  letter-spacing: -0.02em;
  white-space: nowrap;
`;

export const DesktopNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.2s ease;

  &:hover,
  &:focus-visible {
    color: #fff;
  }
`;

export const ActionsRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media ${(props) => props.theme.breakpoints.md} {
    gap: 0.5rem;
  }
`;

export const SocialIcons = styled.a`
  display: flex;
  transition: 0.2s ease;
  color: white;
  border-radius: 50px;
  padding: 8px;

  &:hover,
  &:focus-visible {
    background-color: #1a1a1a;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
`;

export const CvButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.4rem;
  font-weight: 600;
  color: #000;
  background: #fff;
  border-radius: 999px;
  padding: 0.8rem 1.6rem;
  transition: 0.2s ease;
  white-space: nowrap;

  &:hover,
  &:focus-visible {
    background: rgba(255, 255, 255, 0.8);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.7rem 1.2rem;
    font-size: 1.3rem;
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: #fff;
  width: 40px;
  height: 40px;
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid #fff;
    outline-offset: 2px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
  }
`;

export const MobileNav = styled.nav<{ $open: boolean }>`
  display: none;

  @media ${(props) => props.theme.breakpoints.md} {
    display: ${({ $open }) => ($open ? 'flex' : 'none')};
    flex-direction: column;
    gap: 0.25rem;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: #000;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    padding: 1rem 1.2rem 1.5rem;
  }
`;

export const MobileNavLink = styled(Link)`
  font-size: 1.7rem;
  color: rgba(255, 255, 255, 0.85);
  padding: 0.9rem 0.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);

  &:hover,
  &:focus-visible {
    color: #fff;
  }
`;

export const MobileSocialRow = styled.div`
  display: flex;
  gap: 0.5rem;
  padding-top: 1rem;
`;
