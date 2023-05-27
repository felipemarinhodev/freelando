import { css } from "@emotion/react"
import styled from "@emotion/styled"

const LabelStyled = styled.label`
  display: block;
  width: 100%;
  box-sizing: border-box;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
`

const InputStyled = styled.input`
  ${({ theme }) => css`
    display: block;
    width: 100%;
    box-sizing: border-box;
    margin-top: ${theme.spaces.xs};
    background: ${theme.colors.a};
    border: 1px solid ${theme.colors.neutral.a};
    border-radius: ${theme.spaces.s};
    height: 40px;

    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
  `}
`

export const TextField = ({ title }) => {
  return (
    <LabelStyled>
      {title}
      <InputStyled />
    </LabelStyled>
  )
}