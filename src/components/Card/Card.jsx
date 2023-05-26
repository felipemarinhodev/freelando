import styled from "@emotion/styled"

const DivStyled = styled.div`
  padding: ${props => props.theme.spaces.l};
  background: ${props => props.theme.colors.secondary.a};
  border: 1px solid ${props => props.theme.colors.primary.a};
  border-radius: ${props => props.theme.spaces.s};
`

export const Card = ({ children }) => {
  return (
    <DivStyled>
      {children}
    </DivStyled>
  )
}