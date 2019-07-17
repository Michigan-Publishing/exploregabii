import React, { useState } from "react"
import styled from "styled-components"
import { MenuProvider, MenuConsumer, HamburgerButton } from "react-flyout-menu"

import { theme, Provider } from "../../constants/theme"
import Header from "../Header"
import Footer from "../Footer"
import FlyoutMenu from "../flyoutMenu"
import src from "../../pages/background.png"
import { LayoutWrapper as OriginalLayoutWrapper } from "../LayoutWrapper"

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

const Content = styled(OriginalLayoutWrapper)`
  background-color: ${({ theme }) => theme.colors.trueWhite} !important;
  border: 1px solid ${({ theme }) => theme.colors.darkBlue};
  padding: 20px;

  background-color: #fab;
`

function Layout({ footerLinks, children }) {
  const [showFlyout, setShowFlyout] = useState(false)

  return (
    <MenuProvider
      onClose={() => {
        setShowFlyout(false)
        document.body.classList.remove("modalOpen")
      }}
    >
      <Provider theme={theme}>
        <LayoutWrapper>
          <Header />
          <MenuConsumer>
            {({ closeElement, setToggleElement }) => (
              <span style={{ fontSize: "1.5rem" }}>
                <HamburgerButton
                  setToggleElement={setToggleElement}
                  closeElement={closeElement}
                  onClick={() => {
                    document.body.classList.add("modalOpen")
                  }}
                />
              </span>
            )}
          </MenuConsumer>
          <Body>{children}</Body>
          <Footer links={footerLinks} />
          <FlyoutMenu isVisible={showFlyout} items={[]} />
        </LayoutWrapper>
      </Provider>
    </MenuProvider>
  )
}

Layout.Content = Content

export default Layout
