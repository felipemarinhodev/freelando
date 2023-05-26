import styled from "@emotion/styled"

const DivStyled = styled.div`
  padding: 32px;
  background: #EBEAF9;
  border: 1px solid #5754ed;
  border-radius: 16px;
`

export const Card = ({ children }) => {
  return (
    <DivStyled>
      {children}
    </DivStyled>
  )
}