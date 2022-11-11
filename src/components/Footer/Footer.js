import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { FcPhoneAndroid, FcAddressBook } from "react-icons/fc";
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      <LinkColumn>
      <FcPhoneAndroid size={"3rem"}/>
      <LinkTitle>Call/Text me</LinkTitle>
      <LinkItem href="tel:+1-403-970-8806">CA +1 403-970-8806</LinkItem>
      </LinkColumn>
      <LinkColumn>
      <FcAddressBook size={"3rem"}/>
      <LinkTitle>Email me</LinkTitle>
      <LinkItem href="mailto:ahmad.arsalan@outlook.com">ahmad.arsalan@outlook.com</LinkItem>
      </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>"Compromise for your dream. But never compromise on your dream." - Imran Khan</Slogan>
        </CompanyContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
