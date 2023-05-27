import { css } from "@emotion/react";
import styled from "@emotion/styled";
import logo from './assets/Logo.png';
import Whatsapp from './assets/Whatsapp.png';
import Twitch from './assets/Twitch.png';
import Instragam from './assets/Instragam.png';
import Twiter from './assets/Twiter.png';
import { Typography } from "../Typography/Typography";

const FooterStyled = styled.footer`
  ${({ theme }) => css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 calc((100vw - 1200px)/2);
    background-color: ${theme.colors.primary.a};
    
    width: 100%;
    height: 172px;
  `}
`

const ContentStyled = styled.div`
  ${({ theme }) => css`

  display: flex;
  flex-direction: column;

  align-items: flex-start;
  justify-content: flex-start;
  color: ${theme.colors.neutral.c};
  `}
`

const SocialNetworksContentStyled = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    align-items: space-between;
    justify-content: center;
    color: ${theme.colors.neutral.c};
  `}
`

const SocialNetworksIconsContentStyled = styled.div`
display: flex;

justify-content: space-around;
align-items: center;
`

export const Footer = () => {
  return (
    <FooterStyled>
      <ContentStyled>
        <img src={logo} alt="logo do freelando" />
        <Typography component="body2" variant="body2">
         Desenvolvido por Alura. Projeto fictício sem fins comerciais.
        </Typography>
      </ContentStyled>
      <SocialNetworksContentStyled>
        <Typography component="body2" variant="body2">
          Acesse nossas redes:
        </Typography>
        <SocialNetworksIconsContentStyled>
          <img src={Whatsapp} alt="logo do Whatsapp" />
          <img src={Twitch} alt="logo do Twitch" />
          <img src={Instragam} alt="logo do Instragam" />
          <img src={Twiter} alt="logo do Twiter" />
        </SocialNetworksIconsContentStyled>

      </SocialNetworksContentStyled>
    </FooterStyled>
  )
}