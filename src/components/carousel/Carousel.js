import React, { Fragment } from "react";
import styled from "styled-components";
import { ImageContent, Whirl } from "react-whirl";
import { ReaderHidden } from "../readerHidden";
import VisuallyHidden from "../visuallyHidden";
import smoothscroll from "smoothscroll-polyfill";

import palette from "../../utils/palette";
import slide1 from "./slide1.jpg";
import slide2 from "./slide2.jpg";
import slide3 from "./slide3.jpg";
import slide4 from "./slide4.jpg";
import slide5 from "./slide5.jpg";
import slide6 from "./slide6.jpg";
import slide7 from "./slide7.jpg";
import slide8 from "./slide8.jpg";
import slide9 from "./slide9.jpg";
import slide10 from "./slide10.jpg";
import slide11 from "./slide11.jpg";

import { textCss } from "../text/Text";

try {
  smoothscroll.polyfill();
} catch (ex) {}

const Wrapper = styled.div`
  ${textCss}
  background-color: rgba(${palette.rgbContentBackground}, .9);
  box-shadow: 0 0 6.25rem rgba(${palette.rgbContentBackground}, 100);
  color: ${palette.white};
  padding: 1rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  background-color: ${palette.contentBackground};
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  height: 48px;
  width: 48px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Next = onNext => (
  <Button onClick={onNext}>
    <ReaderHidden>⟩</ReaderHidden>
    <VisuallyHidden>Next</VisuallyHidden>
  </Button>
);
const Previous = onPrevious => (
  <Button onClick={onPrevious}>
    <ReaderHidden>⟨</ReaderHidden>
    <VisuallyHidden>Previous</VisuallyHidden>
  </Button>
);

export default class extends React.Component {
  static defaultProps = {
    width: 1024,
    height: 576
  };

  state = { mounted: false };

  componentDidMount() {
    this.setState({ mounted: true });
  }
  render() {
    return (
      <Wrapper>
        <Whirl
          controlsStyle={{
            top: "50%",
            marginLeft: "-25px",
            width: "calc(100% + 50px)"
          }}
          next={Next}
          previous={Previous}
          stretch
          width="1024px"
          height="576px"
        >
          <ImageContent
            imgSrc={slide1}
            caption="Manit Limlamai quote"
            description={
              <Fragment>
                <blockquote>
                  <p>
                    Things change all the time, so if you don't write it down
                    nobody remembers what was spoken, what was said
                  </p>
                </blockquote>
                <cite>Manit Limlamai, Software Engineer. Google</cite>
              </Fragment>
            }
            descriptionId="slide1"
          />
          <ImageContent
            imgSrc={slide2}
            caption="Priya Jacob quote"
            description={
              <Fragment>
                <blockquote>
                  <p>
                    I struggled with writing. One of my writing instructors in
                    undergrad taught me that it wasn't so complicated. I think
                    it's just a skill that can be developed... if you have good
                    instruction.
                  </p>
                </blockquote>
                <cite>
                  Priya Jacob, Child Psychiatrist. University of Michigan Alumna
                </cite>
              </Fragment>
            }
            descriptionId="slide2"
          />
          <ImageContent
            imgSrc={slide3}
            caption="Mike Boyle quote"
            description={
              <Fragment>
                <blockquote>
                  <p>
                    I think about writing as kind of a bridge between one's
                    internal world, which is kind of amorphous and in a lot of
                    ways unknown, even to ourselves, and the outside world.
                  </p>
                </blockquote>
                <cite>Mike Boyle, Stay-at-home dad. Creative Writer</cite>
              </Fragment>
            }
            descriptionId="slide3"
          />
          <ImageContent
            imgSrc={slide4}
            caption="Jessie Nixon quote"
            description={
              <Fragment>
                <blockquote>
                  <p>
                    The best way that we improve our writing is through getting
                    feedback. I've gotten lots of feedback throughout the years
                    that has helped inform my own writing.
                  </p>
                </blockquote>
                <cite>
                  Jessie Nixon, PhD Student, Education Design. University of
                  Wisconsin Madison
                </cite>
              </Fragment>
            }
            descriptionId="slide4"
          />
          <ImageContent
            imgSrc={slide5}
            caption="Nathan Tomow quote"
            description={
              <Fragment>
                <blockquote>
                  <p>
                    I write through and explore some ideas. I don't realize what
                    I'm actually thinking or how thoroughly I'm thinking through
                    something until I've actually written it out.
                  </p>
                </blockquote>
                <cite>
                  Nathan Tomow, History Teacher. University of Michigan Alumnus
                </cite>
              </Fragment>
            }
            descriptionId="slide5"
          />
          <ImageContent
            imgSrc={slide6}
            caption="Sarah Juday quote"
            description={
              <Fragment>
                <blockquote>
                  <p>
                    One of the best ways to become a better writer is to edit
                    others and edit yourself as if it were another.
                  </p>
                </blockquote>
                <cite>Sarah Juday, Writer/Editor. University of Alaska</cite>
              </Fragment>
            }
            descriptionId="slide6"
          />
          <ImageContent
            imgSrc={slide7}
            caption="Bonny Hoffman quote"
            description={
              <Fragment>
                <blockquote>
                  <p>
                    Making sure your notes are clear and that the person who's
                    coming behind you and wasn't there during your conversation
                    knows exactly what you're trying to say.
                  </p>
                </blockquote>
                <cite>
                  Bonny Hoffman, Pediatric Nurse. University of Michigan Alumna
                </cite>
              </Fragment>
            }
            descriptionId="slide7"
          />
          <ImageContent
            imgSrc={slide8}
            caption="Jane Johnson quote"
            description={
              <Fragment>
                <blockquote>
                  <p>
                    What was the most helpful to me was a professor I had in
                    college who taught us how to write well. I learned how to be
                    concrete in my communication, how to be organized.
                  </p>
                </blockquote>
                <cite>
                  Jane Johnson, Administrative Manager. University of Michigan
                </cite>
              </Fragment>
            }
            descriptionId="slide8"
          />
          <ImageContent
            imgSrc={slide9}
            caption="Danielle Dreilinger quote"
            description={
              <Fragment>
                <blockquote>
                  <p>
                    [Writing offers] the ability to make sense of the world for
                    other people.
                  </p>
                </blockquote>
                <cite>
                  Danielle Dreilinger, Journalist. New Orleans Times-Picayune
                </cite>
              </Fragment>
            }
            descriptionId="slide9"
          />
          <ImageContent
            imgSrc={slide10}
            caption="Shamai Thacker quote"
            description={
              <Fragment>
                <blockquote>
                  <p>
                    Everything comes from practice. Practice is key. You have to
                    keep writing because the only way you get better is if you
                    keep doing it.
                  </p>
                </blockquote>
                <cite>
                  Shamai Thacker, E-Portfolio Strategist. University of Alaska
                </cite>
              </Fragment>
            }
            descriptionId="slide10"
          />
          <ImageContent
            imgSrc={slide11}
            caption="Jennifer Day quote"
            description={
              <Fragment>
                <blockquote>
                  <p>
                    I use writing to document the kids -- any kinds of new
                    things that they did, funny things that they did -- just as
                    an extension of memory. I'm trying to save it for later when
                    they're older.
                  </p>
                </blockquote>
                <cite>
                  Jennifer Day, Clinic Administration & Patient Account
                  Specialist. Ninilchik Village Tribal Council Community Clinic
                </cite>
              </Fragment>
            }
            descriptionId="slide11"
          />
        </Whirl>
        {this.props.children}
      </Wrapper>
    );
  }
}
