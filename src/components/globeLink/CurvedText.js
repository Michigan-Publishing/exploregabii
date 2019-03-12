import React from "react";
import styled from "styled-components";
import palette from "../../utils/palette";
const Text = styled.text`
  fill: ${palette.mainNavText};
  font: bold 1.5rem sans-serif;
  letter-spacing: 0.3rem;
`;

export default class extends React.Component {
  static defaultProps = {
    bottomDx: 30,
    bottomDy: 0,
    topDx: 55,
    topDy: 15
  };

  render() {
    const {
      topText,
      bottomText,
      style,
      width,
      height,
      topDx,
      topDy,
      bottomDx,
      bottomDy
    } = this.props;

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xlink="http://www.w3.org/1999/xlink"
        viewBox={`0 0 ${width - 1} ${height - 1}`}
        style={style}
      >
        <title>{topText}</title>
        <defs>
          <path d="M0,75 a75,75 0, 1,1 150,0 a75,75 0 1,1 -150,0" id="top" />
          <path d="M0,75 a75,75 0, 0,0 150,0 a75,75 0 1,0 -150,0" id="bottom" />
        </defs>
        <Text dx={topDx} dy={topDy} transform="rotate(30deg)">
          <textPath href="#top">{topText}</textPath>
        </Text>
        <Text dx={bottomDx} dy={bottomDy}>
          <textPath href="#bottom">{bottomText}</textPath>
        </Text>
      </svg>
    );
  }
}
