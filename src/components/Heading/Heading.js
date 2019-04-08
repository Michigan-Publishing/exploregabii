import React from "react"
import styled from "styled-components"
import { color } from "styled-system"
require("typeface-lato")

const Heading = styled.h1`
  font-family: "Lato", Helvetica, sans-serif;
  color: ${({ theme }) => theme.colors.brandColor};
  ${color}
`

function HeadingComponent({ level = 1, ...props }) {
  return <Heading {...props} as={`h${level}`} />
}
export default HeadingComponent
