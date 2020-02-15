import React, { useState, useLayoutEffect } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
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

  & #main-menu path {
    fill: ${({ theme }) => theme.colors.darkBlue} !important;
  }
`

const Body = styled.div`
  display: flex;
  flex-grow: 1;
  flex-shrink: 0;
`

const Content = styled(OriginalLayoutWrapper)`
  background-color: ${({ theme }) => theme.colors.trueWhite};
  border: 1px solid ${({ theme }) => theme.colors.darkBlue};
  display: flex;
  flex-direction: column;
`

function getNodeTree(nodes, key = null, level = 0) {
  const newNodes = nodes.filter(item => item.node.frontmatter.parentKey === key)

  const output = newNodes.map(({ node }) => ({
    title: node.frontmatter.title,
    slug: node.fields.slug,
    level: level,
    children: getNodeTree(nodes, node.frontmatter.key, level + 1),
  }))

  return output
}

function Layout({ footerLinks, children, ...props }) {
  const [showFlyout, setShowFlyout] = useState(false)
  useLayoutEffect(() => {
    document.querySelectorAll("img").forEach(img => {
      if (img.title) {
        try {
          const parent = img.parentElement
          parent.style.position = "relative"
          var node = document.createElement("div")
          node.style.position = "absolute"
          node.style.bottom = "0"
          node.style.left = "0"
          node.style.right = "0"
          node.style.backgroundColor = "rgba(0,0,0, .8)"
          node.style.color = "#FFF"
          node.style.padding = "12px"
          node.textContent = img.title
          parent.appendChild(node)
        } catch (ex) {
          console.error(ex)
        }
      }
    })
  }, [])

  return (
    <MenuProvider
      onClose={() => {
        setShowFlyout(false)
        document.body.classList.remove("modalOpen")
      }}
    >
      <Provider theme={theme}>
        <LayoutWrapper>
          <Header>
            <>
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
            </>
          </Header>
          <Body>{children}</Body>
          <Footer links={footerLinks} />
          <FlyoutMenu isVisible={showFlyout} items={footerLinks} />
        </LayoutWrapper>
      </Provider>
    </MenuProvider>
  )
}

Layout.Content = Content

function DataWrapper(props) {
  const data = useStaticQuery(graphql`
    query BasicQuery {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              key
              parentKey
              title
            }
          }
        }
      }
    }
  `)

  const nodes = getNodeTree(data.allMdx.edges)

  return <Layout {...props} footerLinks={nodes[0].children} />
}

DataWrapper.Content = Content

export default DataWrapper
