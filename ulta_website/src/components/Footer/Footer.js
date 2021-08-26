import React from 'react';
import {Button} from '../../globalStyles';
import {FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedin} from 'react-icons/fa';
import {FooterContainer , FooterSubscription , FoooterSubText , FooterSubHeading ,Form ,FormInput , FooterLinksContainer , FooterLinksWrapper , FooterLinksItems , FooterLinkTitle , FooterLink , SocialMedia , SocialMediaWrap , SocialIcon , SocialIconLink , SocialLogo , WebsiteRights , SocialIcons} from './FooterElements';

const Footer = () => {
    return (
        <FooterContainer>
          <FooterSubscription>
              <FooterSubHeading>
              Join our exclusive membership to receive the latest news and trends
              </FooterSubHeading>
              <FoooterSubText>You can unsubscribe at any time.</FoooterSubText>
              <Form>
                  <FormInput name="email" type="email" placeholder="Your Email" />
                         <Button fontBig>Subscribe</Button>
              </Form>
          </FooterSubscription>
              <FooterLinksContainer>
                  <FooterLinksWrapper>
                      <FooterLinksItems>
                          <FooterLinkTitle>About Us</FooterLinkTitle>
                          <FooterLink to='/sign-up'>How it works</FooterLink>
                          <FooterLink to='/'>Testimonials</FooterLink>
                          <FooterLink to='/'>Career</FooterLink>
                          <FooterLink to='/'>Investers</FooterLink>
                          <FooterLink to='/'>Terms of Service</FooterLink>
                      </FooterLinksItems>
                             
                      <FooterLinksItems>
                          <FooterLinkTitle>Contact Us</FooterLinkTitle>
                          <FooterLink to='/'>Contact</FooterLink>
                          <FooterLink to='/'>Support</FooterLink>
                          <FooterLink to='/'>Destinatios</FooterLink>
                          <FooterLink to='/'>Sponsorships</FooterLink>
    
                      </FooterLinksItems> 
                      </FooterLinksWrapper>
                       

                      <FooterLinksWrapper>
                      <FooterLinksItems>
                          <FooterLinkTitle>Videos</FooterLinkTitle>
                        
                          <FooterLink to='/'>Submit</FooterLink>
                          <FooterLink to='/'>Ambassadors</FooterLink>
                          <FooterLink to='/'>Agency</FooterLink>
                          <FooterLink to='/'>Influencer</FooterLink>
                      </FooterLinksItems> 

                      <FooterLinksItems>
                          <FooterLinkTitle>Social Media</FooterLinkTitle>
                          
                          <FooterLink to='/'>Instagram</FooterLink>
                          <FooterLink to='/'>Facebook</FooterLink>
                          <FooterLink to='/'>Youtube</FooterLink>
                          <FooterLink to='/'>Twitter</FooterLink>
                      </FooterLinksItems>
                  </FooterLinksWrapper>
              </FooterLinksContainer>

              <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to='/'>
            <SocialIcon />
            ULTRA
          </SocialLogo>
          <WebsiteRights>ULTRA © 2020</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href={
                '//www.youtube.com/'
              }
              rel='noopener noreferrer'
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='LinkedIn'>
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
        </FooterContainer>
        
    )
}

export default Footer
