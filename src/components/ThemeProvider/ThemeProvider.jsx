import { ThemeProvider as ThemeProviderEmotion } from "@emotion/react"

const theme = {
  colors: {
    white: '',
    warning: '',
    focus: '',
    primaries: {
      a: '',
      b: '',
      c: ''
    },
    secondary: {
      a: '',
      b: '',
      c: ''
    },
    neutrals: {
      a: '',
      b: '',
      c: '',
      d: ''
    },
    dark: {
      a: '',
      b: ''
    },
  }
}

export const ThemeProvider = ({ children }) => {
  return (
    <ThemeProviderEmotion theme={theme}>
      {children}
    </ThemeProviderEmotion>
  )
}