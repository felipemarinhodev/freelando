import styled from "@emotion/styled";

const components = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  body: 'p',
  bodyBold: 'strong',
  body2: 'p',
  bodyBold2: 'strong',
  subtitle: 'p'
}

const styles = {
  h1: `
    font-weight: 600;
    font-size: 40px;
    line-height: 49px;
    `,
  h2: `
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;
    `,
  h3: `
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    `,
  body: `
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
  `,
  bodyBold: `
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
  `,
  body2: `
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
  `,
  bodyBold2: `
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
  `,
  subtitle: `
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
  `,
  subtitle2: `
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    text-decoration-line: underline;
  `
}

export const Typography = ({ children, variant, component }) => {

  const tag = components[component];
  const Component = styled[tag]`${styles[variant]}`

  return (
    <Component>{children}</Component>
  )
}