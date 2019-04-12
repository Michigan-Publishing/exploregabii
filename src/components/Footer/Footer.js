import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

import { Fragment } from "../../../public/admin/cms"
import { TABLET_LANDSCAPE_WIDTH } from "../../constants"

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: ${TABLET_LANDSCAPE_WIDTH}px) {
    flex-direction: column;
  }
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 2rem;
  width: 32%;
  @media (max-width: ${TABLET_LANDSCAPE_WIDTH}px) {
    font-size: 1rem;
    width: 100%;
  }
`

function getLinkColumn(link) {
  return (
    <Fragment>
      <Link to={link.slug}>
        <strong>{link.title}</strong>
      </Link>
      {link.children.map(childLink => (
        <ChildLink key={childLink.slug} to={childLink.slug}>
          {childLink.title}
        </ChildLink>
      ))}
    </Fragment>
  )
}

function Footer({ links }) {
  return <strong>Footer</strong>
  {
    links
      .sort((a, b) => {
        return a.title > b.title ? 1 : a.title < b.title ? -1 : 0
      })
      .map(link => <Column key={link.slug}>{this.getLinkColumn(link)}</Column>)
  }
}

export default Footer
