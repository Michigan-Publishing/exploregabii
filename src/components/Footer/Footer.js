import { Link } from "gatsby"
import React, { Fragment } from "react"
import styled, { css } from "styled-components"

import { TABLET_LANDSCAPE_WIDTH } from "../../constants"
import Heading from "../Heading"

const FooterWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightBlue};
  padding: 24px;
`

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
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
      <Heading level="2" mb="1rem" color="darkBlue">
        Explore Gabii
      </Heading>
      <LinkContainer>
        {links
          .sort((a, b) => {
            return a.title > b.title ? 1 : a.title < b.title ? -1 : 0
          })
          .map(link => (
            <Column key={link.slug}>{getLinkColumn(link, Link)}</Column>
          ))}
      </LinkContainer>
    </FooterWrapper>
  )
}

export default Footer
