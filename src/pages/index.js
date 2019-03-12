import React, { Fragment, Component } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import SiteContainer from "../components/siteContainer";
import Text from "../components/text";
import Carousel from "../components/carousel";
// eslint-disable-next-line
import Breakpoints, {
  breakpointNames,
  breakpoints
} from "../components/breakpoints";

import { textCss } from "../components/text/Text";
import palette from "../utils/palette";

import * as breakpointConstants from "../constants";

// eslint-disable-next-line
import styles from "../styles/global.css";

import {
  Link as LinkButton,
  LinkBackground
} from "../components/secondaryNavigation";
import VisuallyHidden from "../components/visuallyHidden";

const StyledLinkButton = styled(LinkButton)`
  ${LinkBackground}
  z-index: 10;
`;

const LinkRow = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 1024px;

  @media (max-width: ${breakpointConstants.TABLET_LANDSCAPE_WIDTH}px) {
    width: 80%;
    flex-direction: column;
    & a {
      margin-bottom: 1em;
    }
  }
`;

const SecondaryHeading = styled.h2`
  ${textCss}
  color: ${palette.white};
  margin: 1rem 0 0 0;
  background-opacity: .9;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 1;
`;

const LinkText = styled(Text)`
  font-size: 1.5rem;
`;

// eslint-disable-next-line
const getSlideshowDimensions = breakpoint => {
  if (breakpoints[breakpoint] > breakpoints[breakpointNames.tablet]) {
    return { width: 1024, height: 576 };
  }

  if (breakpoints[breakpoint] > breakpoints[breakpointNames.mobile]) {
    return { width: 682, height: 384 };
  }

  return { width: 341, height: 192 };
};

export default class Pages extends Component {
  render() {
    return (
      <Breakpoints>
        <SiteContainer {...this.props} showBreadcrumbs={false}>
          <Helmet>
            <meta charSet="utf-8" />
            <title>Developing Writers</title>
          </Helmet>
          <VisuallyHidden>
            <h1>Developing Writers home</h1>
          </VisuallyHidden>
          <ContentWrapper>
            <Fragment>
              <Carousel>
                <SecondaryHeading>
                  Welcome! Start here to find out what 169 students can tell you
                  about writing.
                </SecondaryHeading>
              </Carousel>
              <LinkRow>
                <StyledLinkButton to="/pages/writing-involves-choices">
                  <LinkText>Writing involves choices</LinkText>
                </StyledLinkButton>
                <StyledLinkButton to="/pages/writing-is-social">
                  <LinkText>Writing is social</LinkText>
                </StyledLinkButton>
              </LinkRow>
            </Fragment>
          </ContentWrapper>
        </SiteContainer>
      </Breakpoints>
    );
  }
}

export const query = graphql`
  {
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
`;
