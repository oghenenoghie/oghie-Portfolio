import React from 'react';
import { AiFillGithub, AiOutlineMail, AiOutlineTwitter } from 'react-icons/ai';

import { siteConfig } from '../../constants/siteConfig';
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIcons,
  SocialIconsContainer,
} from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href={`mailto:${siteConfig.email}`}>{siteConfig.email}</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>GitHub</LinkTitle>
          <LinkItem href={siteConfig.githubUrl} target="_blank" rel="noreferrer">
            @{siteConfig.githubHandle}
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Building production-ready software, one system at a time.</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href={siteConfig.githubUrl} target="_blank" rel="noreferrer" aria-label={`${siteConfig.name}'s GitHub profile`}>
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href={siteConfig.twitterUrl} target="_blank" rel="noreferrer" aria-label={`${siteConfig.name}'s Twitter profile`}>
            <AiOutlineTwitter size="3rem" />
          </SocialIcons>
          <SocialIcons href={`mailto:${siteConfig.email}`} aria-label={`Email ${siteConfig.name}`}>
            <AiOutlineMail size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
