import styled from "styled-components"

export const textCss = `
  font-family: Helvetica, Arial, sans-serif;
`

const Text = styled.span`
  ${textCss};
  color: ${({ theme }) => theme.colors.brandColor};
`

export default Text
