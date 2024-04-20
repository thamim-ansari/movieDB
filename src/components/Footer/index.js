import {FaFacebookF, FaInstagram, FaTwitter, FaLinkedin} from 'react-icons/fa'

import {
  FooterContainer,
  ContentWrapper,
  FooterListContainer,
  FooterListItems,
  FooterDescription,
  SocialIconsContainer,
  SocialIconContainer,
} from './styledComponents'

const Footer = () => (
  <FooterContainer>
    <ContentWrapper>
      <FooterListContainer>
        <FooterListItems className="menuItem">Terms Of Use</FooterListItems>
        <FooterListItems className="menuItem">Privacy-Policy</FooterListItems>
        <FooterListItems className="menuItem">About</FooterListItems>
        <FooterListItems className="menuItem">Blog</FooterListItems>
        <FooterListItems className="menuItem">FAQ</FooterListItems>
      </FooterListContainer>
      <FooterDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </FooterDescription>
      <SocialIconsContainer>
        <SocialIconContainer className="icon">
          <FaFacebookF />
        </SocialIconContainer>
        <SocialIconContainer className="icon">
          <FaInstagram />
        </SocialIconContainer>
        <SocialIconContainer className="icon">
          <FaTwitter />
        </SocialIconContainer>
        <SocialIconContainer className="icon">
          <FaLinkedin />
        </SocialIconContainer>
      </SocialIconsContainer>
    </ContentWrapper>
  </FooterContainer>
)

export default Footer
