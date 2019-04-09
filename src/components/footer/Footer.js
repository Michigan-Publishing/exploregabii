import React, { Component, Fragment } from "react"
import styled from "styled-components"
import { Link as GatsbyLink } from "gatsby"
import palette from "../../utils/palette"
import { TABLET_LANDSCAPE_WIDTH } from "../../constants"

import logo from "./umich-logo.png"
import library from "./mliblogo.png"
import press from "./press.png"
import collaboratory from "./collaboratory.png"

export const FOOTER_HEIGHT = 172

const FooterWrapper = styled.footer`
  border-top: 3px solid ${palette.relatedBackground};
  background-color: ${palette.lightBackground};
  width: 100vw;
  min-height: ${FOOTER_HEIGHT}px;
  z-index: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem 0 2rem 0;
  color: ${palette.contentBackground};

  @media (max-width: ${TABLET_LANDSCAPE_WIDTH}px) {
    flex-direction: column;
  }
`

const Heading = styled.h4`
  font-size: 1.5rem;
  margin: 1rem 0;
  padding: 0;

  @media (max-width: ${TABLET_LANDSCAPE_WIDTH}px) {
    font-size: 1rem;
  }
`

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

const Left = styled.div`
  width: 50%;
  padding-left: 1rem;

  @media (max-width: ${TABLET_LANDSCAPE_WIDTH}px) {
    width: 100%;
    justify-content: flex-start;
    margin-bottom: 2rem;
  }
`

const Right = styled(Left)`
  width: 50%;
  padding-left: unset;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding-right: 3rem;

  & img:not(:first-child) {
    margin-left: 20px;
  }

  @media (max-width: ${TABLET_LANDSCAPE_WIDTH}px) {
    max-width: calc(100% - 2rem);
    padding-left: 1rem;
    padding-right: 1rem;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
`

const Link = styled(GatsbyLink)`
  @media (max-width: ${TABLET_LANDSCAPE_WIDTH}px) {
    font-size: 1rem;
    line-height: 1.75rem;
  }
`
const ChildLink = styled(Link)`
  margin: 0.5rem;
  font-size: 0.75rem;
  line-height: 1.3rem;

  @media (max-width: ${TABLET_LANDSCAPE_WIDTH}px) {
    font-size: 0.75rem;
    line-height: 1rem;
  }
`

const LogoWrapper = styled.div`
  height: 100px;
  width: auto;
  background-color: ${palette.blue};
  margin-right: 2rem;

  & img {
    height: 100%;
  }
`

const LogoRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  height: ${props => props.height}px;

  & img {
    height: 100%;
    width: auto;
  }
  @media (max-width: ${TABLET_LANDSCAPE_WIDTH}px) {
    margin-top: 1rem;
  }
`

const OtherLogos = styled.div`
  border-left: 2px solid rgba(${palette.rgbBlue}, 0.5);
  padding-left: 2rem;
  display: flex;
  flex-direction: column;
  height: 110px;
  min-width: 430px;
  justify-content: space-between;

  @media (max-width: ${TABLET_LANDSCAPE_WIDTH}px) {
    padding: 0;
    border: none;
    justify-content: flex-start;
    align-items: flex-start;
    min-width: unset;

    & img.max {
      max-width: 100%;
      height: inherit;
    }
  }
`

class Footer extends Component {
  getLinkColumn = link => {
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
  render() {
    return (
      <FooterWrapper>
        <Left>
          <Heading>Developing Writers</Heading>
          <ColumnWrapper>
            {this.props.links
              .sort((a, b) => {
                return a.title > b.title ? 1 : a.title < b.title ? -1 : 0
              })
              .map(link => (
                <Column key={link.slug}>{this.getLinkColumn(link)}</Column>
              ))}
          </ColumnWrapper>
        </Left>
        <Right>
          <LogoWrapper>
            <img alt="University of Michigan logo" src={logo} width="auto" />
          </LogoWrapper>
          <OtherLogos>
            <LogoRow height={60}>
              <img
                src={library}
                alt="University of Michigan Library Logo"
                width="auto"
              />
              <img src={press} alt="University of Michigan Press Logo" />
            </LogoRow>
            <LogoRow height={40}>
              <img
                src={collaboratory}
                className="max"
                alt="Humanities Collaboratory Logo"
              />
            </LogoRow>
          </OtherLogos>
        </Right>
      </FooterWrapper>
    )
  }
}
export default Footer
