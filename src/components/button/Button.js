import React from "react"
import styled from "styled-components"
import { Button as BassButton } from "rebass"

export const Button = styled(BassButton)`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.brandColor};
  border: 2px solid ${({ theme }) => theme.colors.brandColor};
`

Button.defaultProps = {
  as: "button",
  fontSize: 2,
  py: "1.5rem",
  px: "2rem",
}

const LinkWrapper = styled.span`
  display: inline-block;
  margin-top: 1.5rem;
`

export const ButtonLink = props => (
  <LinkWrapper>
    <Button as="a" {...props} />
  </LinkWrapper>
)
