import { Link } from "gatsby"
import React, { Fragment } from "react"
import styled, { css } from "styled-components"

import { TABLET_LANDSCAPE_WIDTH } from "../../constants"
import Heading from "../Heading"

import { LayoutWrapper } from "../LayoutWrapper"
import ClassicsLogo from "./classics-logo.png"

const FooterWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightBlue};
  padding: 24px;
`

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: flex-start;
  line-height: 1.4rem;

  & a {
    color: ${({ theme }) => theme.colors.darkBlue};
  }

  @media (max-width: ${TABLET_LANDSCAPE_WIDTH}px) {
    flex-direction: column;
  }
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 2rem;
  min-width: 10rem;
  margin-top: 1rem;

  &.linkColumn {
    min-width: 12.5rem;
    width: 12.5rem;
  }

  &.imageColumn {
    flex-shrink: 1;
    img {
      background-color: #00274c;
      padding: 1rem;
      width: auto;
      height: auto;
      object-fit: contain;
      max-width: 100%;
    }
  }

  @media (max-width: ${TABLET_LANDSCAPE_WIDTH}px) {
    min-width: unset;
    font-size: 1rem;
    width: 100%;
    margin-bottom: 1rem;
  }
`

const ChildLink = styled(Link)`
  margin-left: 0.4rem;
  line-height: 1.6rem;
`

function getLinkColumn(link) {
  return (
    <Fragment>
      <Link to={link.slug}>
        <strong>{link.title}</strong>
      </Link>
      {link.children &&
        link.children.map(childLink => (
          <ChildLink key={childLink.slug} to={childLink.slug}>
            {childLink.title}
          </ChildLink>
        ))}
    </Fragment>
  )
}

function Footer({ links }) {
  if (!links) {
    return null
  }

  return (
    <FooterWrapper>
      <LayoutWrapper>
        <Column>
          <Heading level="2" mb="1rem" color="darkBlue">
            <a href="/">Explore Gabii</a>
          </Heading>
          <LinkContainer>
            {links
              .sort((a, b) => {
                return a.title > b.title ? 1 : a.title < b.title ? -1 : 0
              })
              .map(link => (
                <Column className="linkColumn" key={link.slug}>
                  {getLinkColumn(link, Link)}
                </Column>
              ))}
          </LinkContainer>
        </Column>
        <Column className="imageColumn">
          <a href="https://lsa.umich.edu/classics">
            <img
              src={ClassicsLogo}
              width="874"
              height="100"
              alt="The Department of Classical Studies"
            />
          </a>
        </Column>
      </LayoutWrapper>
    </FooterWrapper>
  )
}

export default Footer
