import React from "react";
import standard from "./background.jpg";
import styled from "styled-components";
import { TABLET_LANDSCAPE_WIDTH } from "../../constants";

const BackgroundContainer = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;

const BackgroundBox = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  overflow: hidden;

  @media (max-width: ${TABLET_LANDSCAPE_WIDTH}px) {
    position: fixed;
    top: 0;
    z-index: -1;
  }
`;

const Background = styled.div`
  background: url(${props => props.src}) no-repeat center center fixed;
  background-origin: border-box;
  background-size: cover;
  transform-origin: top center;
  transform: perspective(500px) skewY(var(--skewBackground))
    scale(var(--scaleBackground));
  transition: transform 200ms;
  min-width: 100%;
  min-height: 100%;
`;

function getPercentScrolled() {
  const scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight || document.body.scrollHeight;
  const clientHeight = document.documentElement.clientHeight;

  return (scrollTop / (scrollHeight - clientHeight)) * 100;
}

export default class BackgroundWrapper extends React.Component {
  rootElement = null;
  state = { backgroundCalculation: 0 };
  element = React.createRef();

  componentDidMount() {
    this.rootElement = document.documentElement;
    window.addEventListener("scroll", this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  }

  onScroll = e => {
    const percentScrolled = getPercentScrolled();
    const skew = `-${percentScrolled / 10000}turn`;
    const scale = 1 + percentScrolled / 2000;

    this.rootElement.style.setProperty("--skewBackground", skew);
    this.rootElement.style.setProperty("--scaleBackground", scale);
  };

  render() {
    const { children } = this.props;
    return (
      <BackgroundContainer>
        <BackgroundBox>
          <Background
            src={standard}
            backgroundCalculation={this.state.backgroundCalculation}
          />
        </BackgroundBox>
        {children}
      </BackgroundContainer>
    );
  }
}
