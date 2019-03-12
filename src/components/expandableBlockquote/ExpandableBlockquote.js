import React, { Component, Fragment } from "react";
import styled from "styled-components";
import TouchableOpacity from "../touchableOpacity";
import Markdown from "../../components/markdown";
import pallette from "../../utils/palette";

import VisuallyHidden from "../visuallyHidden";
import { ReaderHidden } from "../readerHidden";

const Wrapper = styled.div`
  & .hidden {
    display: none;
  }
`;

export default class ExpandableBlockquote extends Component {
  element = React.createRef();
  moreButton = React.createRef();

  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  toggleExpanded = e => {
    e.preventDefault();

    this.setState({
      expanded: !this.state.expanded
    });
  };

  componentDidUpdate(previousProps, previousState) {
    try {
      if (this.state.expanded === true && previousState.expanded === false) {
        const element = this.element.current;
        const link = element.querySelector("a");
        element.querySelector("a").focus();
      } else if (
        this.state.expanded === false &&
        previousState.expanded === true
      ) {
        const button = this.moreButton.current;
        button.focus();
      }
    } catch (ex) {}
  }

  render() {
    const opacityStyle = { color: pallette.white, cursor: "pointer" };

    return (
      <Fragment>
        <ReaderHidden>
          <Wrapper>
            <blockquote
              ref={this.element}
              className={this.state.expanded ? "visible" : "hidden"}
              aria-hidden={!this.state.expanded}
            >
              <Markdown>{unescape(this.props.fullText)}</Markdown>&nbsp;
              <TouchableOpacity
                style={opacityStyle}
                onClick={this.toggleExpanded}
              >
                [Less]
              </TouchableOpacity>
            </blockquote>
            <blockquote
              className={!this.state.expanded ? "visible" : "hidden"}
              aria-hidden={!this.state.expanded}
            >
              {unescape(this.props.previewText)}&nbsp;
              <TouchableOpacity
                style={opacityStyle}
                onClick={this.toggleExpanded}
                ref={this.moreButton}
              >
                [More]
              </TouchableOpacity>
            </blockquote>
          </Wrapper>
        </ReaderHidden>
        <VisuallyHidden>
          <blockquote ref={this.element}>
            <Markdown>{unescape(this.props.fullText)}</Markdown>&nbsp;
          </blockquote>
        </VisuallyHidden>
      </Fragment>
    );
  }
}
