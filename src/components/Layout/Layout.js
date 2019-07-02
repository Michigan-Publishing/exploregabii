import React from "react"
import styled from "styled-components"
import { theme, Provider } from "../../constants/theme"

import Header from "../Header"
import Footer from "../Footer"

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
`
const Body = styled.div`
  display: flex;
  flex-grow: 1;
  flex-shrink: 0;
`

const Content = styled.div`
  padding: 20px;
`

function Layout({ footerLinks, children }) {
  return (
    <Provider theme={theme}>
      <LayoutWrapper>
        <Header />
        <Body>{children}</Body>
        <Footer links={footerLinks} />
      </LayoutWrapper>
    </Provider>
  )
}

Layout.Content = Content

export default Layout
