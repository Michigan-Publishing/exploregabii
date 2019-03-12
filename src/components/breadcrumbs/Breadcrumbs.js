import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { textCss } from "../text/Text";
import palette from "../../utils/palette";
import { TABLET_LANDSCAPE_WIDTH } from "../../constants";

const BreadcrumbWrapper = styled.div`
  margin: .75rem 0;
  display: flex;
  flex-direction: row;
  ${textCss}
  color: ${palette.white};

  a, a:visited {
    margin: 0 .75rem;
    color: ${palette.white};
    opacity: .8;
  }

  a:first-child {
    margin-right: .75rem;
    margin-left: 0;
  }

  & span { 
    display: inline-block;
    max-width: 300px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  span:not(:last-child)::after {
    content: ">";
    margin-right: .75rem;
    opacity: .6;
  }

  @media (max-width: ${TABLET_LANDSCAPE_WIDTH}px) {
    flex-direction: column !important;

    & span { 
      max-width: 300px;
      white-space: unset;
    }
  }
`;

const LinkWrapper = styled.span``;
export default class extends Component {
  render() {
    const { items } = this.props;
    return items && items.length > 0 ? (
      <BreadcrumbWrapper>
        {items.map((item, index) =>
          index !== items.length - 1 ? (
            <LinkWrapper key={item.slug}>
              <Link to={item.slug}>{item.title}</Link>
            </LinkWrapper>
          ) : (
            <LinkWrapper key={item.slug}>{item.title}</LinkWrapper>
          )
        )}
      </BreadcrumbWrapper>
    ) : null;
  }
}
