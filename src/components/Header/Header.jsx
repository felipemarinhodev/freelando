import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { Typography } from "../Typography/Typography"
import logo from './assets/Logo.png'

const HeaderStyled = styled.header`
${({ theme }) => css`
  
  box-sizing: border-box;
  display: flex;

  justify-content: space-between;
  align-items: center;

  padding: 0 calc((100vw - 1200px)/2);
  
  width: 100%;
  height: 104px;
  background-color: ${theme.colors.primary.a};

  color: ${theme.colors.neutral.c};
  `}
`

export const Header = () => {
  return (
    <HeaderStyled>
      <img src={logo} alt="logo freelando" />
      <Typography variant="body" component="body">Login</Typography>
    </HeaderStyled>
  )
}