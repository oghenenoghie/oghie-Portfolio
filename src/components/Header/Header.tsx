import React, { useState } from 'react';
import { AiFillGithub, AiOutlineDownload, AiOutlineMail, AiOutlineTwitter } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { siteConfig } from '../../constants/siteConfig';
import {
  ActionsRow,
  Container,
  CvButton,
  DesktopNav,
  Logo,
  MobileMenuButton,
  MobileNav,
  MobileNavLink,
  MobileSocialRow,
  NavLink,
  SocialIcons,
} from './HeaderStyles';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Skills', href: '/#skills' },
  { label: 'About', href: '/#about' },
  { label: 'Resume', href: '/resume' },
  { label: 'Contact', href: '/#contact' },
];

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <Container>
      <Logo href="/">
        <DiCssdeck size="2.6rem" aria-hidden="true" /> {siteConfig.name}
      </Logo>

      <DesktopNav aria-label="Primary">
        {navItems.map((item) => (
          <NavLink key={item.href} href={item.href}>
            {item.label}
          </NavLink>
        ))}
      </DesktopNav>

      <ActionsRow>
        <SocialIcons href={siteConfig.githubUrl} target="_blank" rel="noreferrer" aria-label={`${siteConfig.name}'s GitHub profile`}>
          <AiFillGithub size="2.6rem" />
        </SocialIcons>
        <SocialIcons href={siteConfig.twitterUrl} target="_blank" rel="noreferrer" aria-label={`${siteConfig.name}'s Twitter profile`}>
          <AiOutlineTwitter size="2.6rem" />
        </SocialIcons>
        <SocialIcons href={`mailto:${siteConfig.email}`} aria-label={`Email ${siteConfig.name}`}>
          <AiOutlineMail size="2.6rem" />
        </SocialIcons>
        <CvButton href={siteConfig.resumePdfPath} download>
          <AiOutlineDownload size="1.6rem" aria-hidden="true" /> Download CV
        </CvButton>
        <MobileMenuButton
          type="button"
          aria-label={isMobileNavOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileNavOpen}
          aria-controls="mobile-nav"
          onClick={() => setIsMobileNavOpen((open) => !open)}
        >
          {isMobileNavOpen ? '✕' : '☰'}
        </MobileMenuButton>
      </ActionsRow>

      <MobileNav id="mobile-nav" $open={isMobileNavOpen} aria-label="Mobile">
        {navItems.map((item) => (
          <MobileNavLink key={item.href} href={item.href} onClick={() => setIsMobileNavOpen(false)}>
            {item.label}
          </MobileNavLink>
        ))}
        <MobileSocialRow>
          <SocialIcons href={siteConfig.githubUrl} target="_blank" rel="noreferrer" aria-label={`${siteConfig.name}'s GitHub profile`} style={{ display: 'flex' }}>
            <AiFillGithub size="2.4rem" />
          </SocialIcons>
          <SocialIcons href={siteConfig.twitterUrl} target="_blank" rel="noreferrer" aria-label={`${siteConfig.name}'s Twitter profile`} style={{ display: 'flex' }}>
            <AiOutlineTwitter size="2.4rem" />
          </SocialIcons>
          <SocialIcons href={`mailto:${siteConfig.email}`} aria-label={`Email ${siteConfig.name}`} style={{ display: 'flex' }}>
            <AiOutlineMail size="2.4rem" />
          </SocialIcons>
        </MobileSocialRow>
      </MobileNav>
    </Container>
  );
};

export default Header;
