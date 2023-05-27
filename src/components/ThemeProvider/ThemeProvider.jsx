import { ThemeProvider as ThemeProviderEmotion } from "@emotion/react"

const theme = {
  colors: {
    white: '',
    warning: '',
    focus: '',
    primary: {
      a: '#5754ED',
      b: '',
      c: ''
    },
    secondary: {
      a: '#EBEAF9',
      b: '',
      c: ''
    },
    neutral: {
      a: '#373737',
      b: '',
      c: '#F5F5F5',
      d: ''
    },
    dark: {
      a: '',
      b: ''
    },
  },
  spaces: {
    xxs: '4px',
    xs: '8px',
    s: '16px',
    m: '24px',
    l: '32px',
    xl: '48px',
    xxl: '64px'
  },
  fontFamily: "'Montserrat', sans-serif"
}

export const ThemeProvider = ({ children }) => {
  return (
    <ThemeProviderEmotion theme={theme}>
      {children}
    </ThemeProviderEmotion>
  )
}