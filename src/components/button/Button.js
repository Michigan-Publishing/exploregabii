import React from "react"
import styled from "styled-components"

import { textCss } from "../text/Text"

export const Button = styled.button`
  ${textCss};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.brandColor};
  border: 2px solid ${({ theme }) => theme.colors.brandColor};
  padding: 1.5rem 2rem;
  font-size: 1rem;
`

const LinkWrapper = styled.span`
  display: inline-block;
  margin-top: 1.5rem;
`
export const ButtonLink = props => (
  <LinkWrapper>
    <Button as="a" {...props} />
  </LinkWrapper>
)
