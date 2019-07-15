import React from "react"
import styled from "styled-components"
import { Box, Flex } from "rebass"
import Logo from "../logo"
import { Text } from "../text/Text"
import { LayoutWrapper } from "../LayoutWrapper"

const HeaderContainer = styled(Flex)`
  padding: 10px 0;
  background-color: ${({ theme }) => theme.colors.lightBlue};
  border-bottom: 3px solid ${({ theme }) => theme.colors.darkBlue};
  color: ${({ theme }) => theme.colors.brandColor};
  height: 120px;

  ${Box}:nth-child(2) {
    text-align: right;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  ${Box} img {
    margin: 0 2rem;
  }
`

function Header({ children }) {
  return (
    <HeaderContainer>
      <LayoutWrapper>
        <Box
          width={[1, 1 / 2]}
          style={{ display: "flex", alignItems: "center" }}
        >
          <Logo variant="dark" />
          <Text fontSize={3}>Explore Gabii</Text>
        </Box>
        <Box width={[1, 1 / 2]}>{children}</Box>
      </LayoutWrapper>
    </HeaderContainer>
  )
}

export default Header
