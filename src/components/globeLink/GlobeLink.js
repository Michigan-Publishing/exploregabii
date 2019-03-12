import React, { Component } from "react";
import styled from "styled-components";

import purple from "./PurpleOrb.svg";
import blue from "./BlueOrb.svg";
import { Link as GatsbyLink } from "gatsby";
import CurvedText from "./CurvedText";
import VisuallyHidden from "../visuallyHidden";
import { textCss } from "../text/Text";
const Image = styled.img`
  height: ${props => props.width}px;
  width: ${props => props.height}px;
`;

const Wrapper = styled.div`
  padding-left: ${props => props.diameter / 4}px
  padding-top: ${props => props.diameter / 4}px
  max-width: ${props => props.diameter}px;
  max-height: ${props => props.diameter}px;
  position: relative;
`;

const Link = styled(GatsbyLink)`
  position: relative;
  z-index: 1;
  &:hover {
    opacity: 0.8;
  }

  &:active {
    img {
      transform: scale(0.9);
    }
  }

  @media (max-width: 480px) {
    img {
      display: none;
    }

    text-decoration: none;
    color: #fff;
    ${textCss}

    span {
      clip: unset;
      position: initial;
      height: auto;
      width: auto;
    }
  }
`;

export const GlobeColor = {
  blue: "blue",
  purple: "purple"
};

export default class extends Component {
  static defaultProps = {
    color: GlobeColor.purple,
    diameter: 150
  };
  render() {
    const {
      style,
      diameter,
      position,
      color,
      topText,
      bottomText,
      bottomDx,
      bottomDy,
      topDx,
      topDy,
      ...linkAttributes
    } = this.props;

    return (
      <Wrapper diameter={diameter} style={style}>
        <CurvedText
          width={diameter}
          height={diameter}
          topText={topText}
          bottomText={bottomText}
          bottomDx={bottomDx}
          bottomDy={bottomDy}
          topDx={topDx}
          topDy={topDy}
          style={{
            transform: "scale(1.5)",
            position: "absolute",
            zIndex: 0
          }}
        />
        <Link {...linkAttributes}>
          <VisuallyHidden>
            {topText} {bottomText}
          </VisuallyHidden>
          <Image
            width={diameter}
            height={diameter}
            src={color === GlobeColor.purple ? purple : blue}
            alt={`${topText} ${bottomText}`}
            title={`${topText} ${bottomText}`}
          />
        </Link>
      </Wrapper>
    );
  }
}
