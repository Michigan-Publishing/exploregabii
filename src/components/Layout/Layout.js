import React from "react"
import styled from "styled-components"
import { theme, Provider } from "../../constants/theme"

import Header from "../Header"
import Footer from "../Footer"
import src from "../../pages/background.png"

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
  background: url(${src});
  background-repeat: no-repeat;
  background-size: cover;
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
