import React, { Component, Fragment } from "react";
import styled from "styled-components";
import palette from "../../utils/palette";
import { textCss } from "../text/Text";

const values = [
  {
    id: "essay",
    label: "Essay",
    description: "",
    link: "https://doi.org/10.3998/mpub.10079890.cmp.219"
  },
  {
    id: "newspaper",
    label: "Newspaper",
    description: "",
    link:
      "https://drive.google.com/file/d/1XmGU_qTyO5VHWGhnwvPOOihfpCxomk9n/view?usp=sharing"
  },
  {
    id: "photo",
    label: "Photograph/Image",
    description: "Alone or with text, images make compelling statements",
    link:
      "https://drive.google.com/file/d/1hFFSexQ-OcdKW0n1iGAMwmDf0gHkNzkm/view?usp=sharing",
    linkDescription: (
      <a href="https://www.pexels.com/" target="_blank" rel="nofollow">
        From pexels.com
      </a>
    )
  },
  {
    id: "text",
    label: "Text Message",
    description:
      "Text messages are a form of multimodal composing that because includes elements such as images and emojis to enhance the meaning of speech bubbles.",
    link:
      "https://drive.google.com/file/d/13nnxRIq-6V1bNBLBCD4jK3NhUvwvsL3j/view?usp=sharing"
  },
  {
    id: "emoji",
    label: "Emoji",
    description: (
      <Fragment>
        <p>
          A Japanese term that translates as “picture character, ” the emoji
          conveys emotions effectively{" "}
          <a href="http://emojitracker.com/" target="_blank" rel="nofollow">
            EmojiTracker (Epilepsy warning)
          </a>
        </p>
      </Fragment>
    ),
    link:
      "https://drive.google.com/file/d/1HmJT9i-2sPU6k3MDkqPdvDbb3SFtWt8q/view?usp=sharing"
  },
  {
    id: "memes",
    label: "Memes",
    description: (
      <Fragment>
        <p>
          Memes are a simple way of taking a big idea and sharing it with a
          large number of readers
          <a href="https://knowyourmeme.com/" target="_blank" rel="nofollow">
            Know Your Meme
          </a>
        </p>
      </Fragment>
    ),
    link:
      "https://i.kym-cdn.com/entries/icons/original/000/000/143/493654d6ef.jpg",
    linkDescription: (
      <a href="https://www.knowyourmeme.com" target="_blank" rel="nofollow">
        From knowyourmeme.com
      </a>
    )
  },
  {
    id: "diagram",
    label: "Diagram/Figure",
    description: (
      <Fragment>
        <p>
          Diagrams and figures can make dense or statistical information more
          digestible and approachable for our readers.{" "}
          <a
            href="https://datavizcatalogue.com/"
            target="_blank"
            rel="nofollow"
          >
            See The Data Visualization Catalog for more examples
          </a>
        </p>
      </Fragment>
    ),
    link: "https://hdl.handle.net/2027/fulcrum.10079890/poi.12"
  },
  {
    id: "video",
    label: "Video",
    description:
      "Video can also help readers understand and experience meaning in more dynamic terms",
    link: "https://doi.org/10.3998/mpub.10079890.cmp.339"
  },
  {
    id: "audio",
    label: "Audio",
    description:
      "Audio can enhance meaning (and its mood) through sound effects, voice, and music.",
    link: "https://www.npr.org/podcasts/381443663/that-s-what-they-say"
  },
  {
    id: "portfolio",
    label: "E-portfolio",
    description: "",
    link: "https://hdl.handle.net/2027/fulcrum.10079890/poi.23"
  }
];

const GameWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CheckboxWrapper = styled.div`
  width: 200px;
  & input[type="checkbox"] {
    opacity: 0;
  }

  & label {
    ${textCss};
    color: ${palette.white};
    position: relative;
    display: inline-block;

    padding-left: 22px;
  }

  & label::before,
  & label::after {
    position: absolute;
    content: "";
    display: inline-block;
  }

  & label::before {
    height: 16px;
    width: 16px;

    background-color: ${palette.white};
    left: 0px;
    top: 3px;
  }

  & label::after {
    height: 5px;
    width: 9px;
    border-left: 2px solid;
    border-bottom: 2px solid;
    color: ${palette.greenCheck};
    transform: rotate(-45deg);

    left: 4px;
    top: 7px;
  }

  & input[type="checkbox"] + label::after {
    content: none;
  }

  & input[type="checkbox"]:checked + label::after {
    content: "";
  }

  & input[type="checkbox"]:focus + label::before {
    outline: rgb(59, 153, 252) auto 5px;
  }

  & a,
  p.description {
    font-size: 0.75rem;
    ${textCss};
    color: ${palette.white};
    position: relative;
    top: -18px;
    left: 42px;
  }

  & p.description {
    font-size: 1rem;

    & a {
      position: initial;
      padding-left: 1rem;
    }
  }
`;

const Game = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;

  & h2 {
    color: ${palette.white};
    ${textCss};
  }
  & button {
    margin: 0 4rem;
    height: 3rem;
    font-size: 1.5rem ${textCss};
    background-color: ${palette.relatedBackground};
    color: ${palette.white};
    border: 1px solid ${palette.white};
  }

  &.results {
    .checkboxWrapper {
      width: 100%;
    }
  }
`;

class Checkbox extends Component {
  handleChange = e => {
    const { onChange } = this.props;

    const { name, checked: isChecked } = e.target;

    onChange(name, isChecked);
  };

  render() {
    const { id, label, checked, disabled, link, description } = this.props;
    return (
      <CheckboxWrapper className="checkboxWrapper">
        <input
          type="checkbox"
          id={id}
          name={id}
          checked={checked || false}
          onChange={this.handleChange}
          disabled={disabled}
        />

        <label htmlFor={id}>{label}</label>
        {link && (
          <p>
            <a href={link} rel="nofollow" target="_blank">
              View example
            </a>
          </p>
        )}
        {disabled && <p className="description">{description}</p>}
      </CheckboxWrapper>
    );
  }
}

export default class extends Component {
  state = { checkedItems: new Map(), formDisabled: false };

  handleChange = (id, isChecked) => {
    this.setState(prevState => ({
      checkedItems: prevState.checkedItems.set(id, isChecked)
    }));
  };

  render() {
    return (
      <Game className={this.state.formDisabled ? "results" : ""}>
        <h2>
          {this.state.formDisabled
            ? "These are ALL multimodal composition"
            : "Which of these objects counts as composition?"}
        </h2>
        <GameWrapper>
          {values.map(item => (
            <Checkbox
              disabled={this.state.formDisabled}
              key={item.id}
              id={item.id}
              label={item.label}
              onChange={this.handleChange}
              checked={this.state.checkedItems.get(item.id)}
              link={item.link}
              description={item.description}
            />
          ))}
        </GameWrapper>
        <button
          disabled={this.state.formDisabled}
          onClick={() => {
            this.setState({ formDisabled: true });
          }}
        >
          Check
        </button>
      </Game>
    );
  }
}
