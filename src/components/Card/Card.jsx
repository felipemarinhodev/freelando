import { css } from "@emotion/react"
import styled from "@emotion/styled"

const DivStyled = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spaces.l};
    background: ${theme.colors.secondary.a};
    border: 1px solid ${theme.colors.primary.a};
    border-radius: ${theme.spaces.s};
  `}
`

export const Card = ({ children }) => {
  return (
    <DivStyled>
      {children}
    </DivStyled>
  )
}