import React, { Component, Fragment } from "react";
import styled from "styled-components";

import { Formik, Form, Field } from "formik";
import { LiveAnnouncer, LiveMessenger } from "react-aria-live";
import palette from "../../utils/palette";
import { textCss } from "../text/Text";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { TABLET_LANDSCAPE_WIDTH } from "../../constants";

const Fieldset = styled.fieldset`
  ${textCss}
  border: none;
  border-left: 0.75rem solid #ccc;
  margin-bottom: 2rem;
  color: ${palette.black};
`;

const Legend = styled.label`
  ${textCss};
  margin: 1.5em 0;
  padding: 0.5em 10px;
  line-height: 2rem;
  font-size: 1;

  &:before,
  &:after {
    color: #ccc;
    content: '"';
    font-size: 4em;
    line-height: 0.1em;
    margin-right: 0.25em;
    vertical-align: -0.4em;
  }
`;

const Strong = styled.p`
  ${textCss};
  font-weight: bold;
  margin: 1rem 0 1rem 1rem;
  color: ${palette.black};
`;

const TopLink = styled.a`
  ${textCss}
  display: inline-block;
  color: #555;
  margin: 1rem 0 1rem 1rem;
  font-size: 1.5rem;
  color: ${palette.black};
`;

const GameBackground = styled.div`
  background-color: ${palette.gameBackground};
`;

const Row = styled.div`
  min-height: 4rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: ${TABLET_LANDSCAPE_WIDTH}px) {
    display: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    line-height: 3rem;
  }
`;

const Centered = styled(Row)`
  min-height: 0;
  display: flex;
  justify-content: center;
`;

const ErrorRow = styled(Row)`
  background-color: ${palette.redBackground};
  border: 1px solid ${palette.red};
  width: 50%;
  justify-content: flex-start;
  padding-left: 2rem;
  margin-top: 2rem;
`;

const SuccessRow = styled(Row)`
  ${textCss}
  background-color: ${palette.success};
  border: 1px solid ${palette.successBorder};
  width: 50%;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 2rem;

  a {
    align-self: flex-start;
    color: rgba(${palette.rgbBlack}, .9);
  }
`;

const responses = {
  criticalAcceptance: {
    key: "CriticalAcceptance",
    label: "Critical Acceptance"
  },
  criticalResistance: {
    key: "CriticalResistance",
    label: "Critical Resistance"
  },
  uncriticalResistance: {
    key: "UncriticalResistance",
    label: "Uncritical Resistance"
  },
  uncriticalAcceptance: {
    key: "UncriticalAcceptance",
    label: "Uncritical Acceptance"
  }
};

function buildGameStep(
  quote,
  correctResponse,
  correctOutput,
  linkText,
  link,
  topLinkText
) {
  return {
    quote,
    correctResponse,
    correctOutput,
    linkText,
    link,
    topLinkText
  };
}

const gameSteps = [
  buildGameStep(
    "I met with my professor, and she pushed me to reorganize my entire essay—completely switch up the structure. I had never done that. I felt like I was pouring my essay into a food processor and dumping the chopped up bits onto a new page, trying earnestly to make sense of it all. I pulled sentences from different paragraphs, combining them into new paragraphs and writing new transitions to glue that mess of an essay together… I wrote her these words in my reflection letter upon turning in the essay: You advised me to organize my essay source by source, and although I wasn’t entirely sold, you explained it well and it made sense to me… Although I was initially resistant to rearranging my essay, pushing myself to try something completely different really strengthened my writing. It was the struggle that made me realize I could step out—or be forced out—of my comfort zone and be successful.",
    responses.criticalAcceptance.key,
    "Jenna listens to her instructor and tries out a new idea based on her instructor’s explanation. Jenna sees that the advice helps her reach her writing goal. This is critical acceptance.",
    "If you’d like to see more of Jenna’s Gateway Eportfolio, click here.",
    "https://doi.org/10.3998/mpub.10079890.cmp.310",
    "From Jenna's Gateway Eportfolio"
  ),
  buildGameStep(
    "She [instructor] had problems with them [my papers] in the beginning, and then we had a meeting. She told me what she thought could be improved, and then I just followed those instructions. She liked them a lot better. I think it was probably just like the order of paragraphs and unnecessary quotes that I could take out.",
    responses.uncriticalAcceptance.key,
    "Dariella listens to her instructor and adopts her advice without question. This is uncritical acceptance.",
    "If you’d like to see the more of the interview transcript with Dariella, click here",
    "https://doi.org/10.3998/mpub.10079890.cmp.130",
    "From Dariella's interview transcript"
  ),
  buildGameStep(
    "You’re not giving me the feedback I want, because you’re telling about adding onto this. I’m telling you, no, I don’t want to do that. I plan to do this... That’s not to say I didn’t take their feedback, or didn’t ever use it, because they’re brilliant writers. That’s why we’re here, so, yeah.",
    responses.criticalResistance.key,
    "Dan listens to his classmates and thinks that this specific feedback doesn’t help him reach his own writing goals. This doesn’t mean that all the advice he gets from peers is unhelpful, though. This is critical resistance.",
    "If you’d like to see more of the interview transcript with Dan, click here",
    "https://doi.org/10.3998/mpub.10079890.cmp.44",
    "From Dan's interview transcript"
  ),
  buildGameStep(
    "Get rid of the peer reviews—because I hate those. I’d rather [the instructor] take a class day to just sit in their office and we can go in there individually and talk with the teachers, than have our peers look at it.",
    responses.uncriticalResistance.key,
    "Katie has decided that her peers have nothing useful to offer her, and so has decided that peer feedback is not useful. Although her decision is likely to be based in experience, she has ruled out different experiences she might have. This is uncritical resistance.",
    "If you’d like to see more of the interview transcript with Katie, click here",
    "https://doi.org/10.3998/mpub.10079890.cmp.92",
    "From Katie's interview transcript"
  )
];

const RadioWrapper = styled.div`
  display: inline-block;
  margin-right: 10px;
  margin-top: 30px;

  & input[type="radio"] {
    display: none;
  }

  & input[type="radio"] + label {
    background-color: ${palette.white};
    padding: 20px;
    border-radius: 40px;
    border: 1px solid #ddd;
    white-space: nowrap;
  }

  & input[type="radio"] + label:hover {
    border: 1px solid ${palette.contentBackground};
  }

  & input[type="radio"]:checked + label {
    color: ${palette.white};
    background-color: ${palette.relatedBackground};
  }
`;
const RadioButton = ({
  field: { name, value, onChange, onBlur, handleSubmit },
  id,
  label,
  className,
  onUpdateValue,
  ...props
}) => {
  return (
    <RadioWrapper>
      <input
        name={name}
        id={id}
        type="radio"
        value={id}
        checked={id === value}
        tabIndex={0}
        onChange={params => {
          onChange(params);
          onUpdateValue();
        }}
        onBlur={params => {
          onBlur(params);
          onUpdateValue(props);
        }}
        {...props}
      />
      <label htmlFor={id}>{label}</label>
    </RadioWrapper>
  );
};

const InputFeedback = styled.span`
  color: ${palette.red};
`;

const RadioButtonGroup = ({
  value,
  error,
  touched,
  id,
  label,
  className,
  children
}) => {
  return (
    <Fieldset>
      <Legend>{label}</Legend>
      {children}
      {
        <Centered
          style={{
            display: error ? "flex" : "none",
            visibility: error ? "visible" : "none"
          }}
        >
          <ErrorRow
            style={{
              display: error ? "flex" : "none",
              visibility: error ? "visible" : "none"
            }}
          >
            <InputFeedback>{error}</InputFeedback>
          </ErrorRow>
        </Centered>
      }
    </Fieldset>
  );
};

class GameStepButtons extends Component {
  state = { showAnswer: false };
  render() {
    const {
      quote,
      correctOutput,
      correctResponse,
      link,
      linkText,
      topLinkText
    } = this.props;
    return (
      <Fragment>
        <TopLink href={link} target="_blank" rel="nofollow">
          {topLinkText}:
        </TopLink>
        <Strong>
          Which of the responses does the following quote represent?
        </Strong>
        <LiveAnnouncer>
          <LiveMessenger>
            {({ announcePolite, announceAssertive }) => (
              <Formik
                initialValues={{ result: "" }}
                validate={values => {
                  let errors = {};

                  if (values.result !== correctResponse) {
                    const errorMessage = "Sorry this is not correct! Try again";
                    announcePolite(errorMessage);
                    errors.result = errorMessage;
                  }

                  return errors;
                }}
                onSubmit={values => {
                  announcePolite(correctOutput);
                  this.setState({ showAnswer: true });
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  submitForm
                }) => (
                  <Fragment>
                    <Form onSubmit={handleSubmit}>
                      <RadioButtonGroup
                        id={`radio-${quote}`}
                        label={quote}
                        value={values.result}
                        error={errors.result}
                        touched={touched.result}
                      >
                        <Row>
                          {Object.keys(responses).map((k, index) => (
                            <Field
                              key={index}
                              component={RadioButton}
                              name="result"
                              id={responses[k].key}
                              label={responses[k].label}
                              onUpdateValue={props => {
                                setTimeout(submitForm, 100);
                              }}
                            />
                          ))}
                        </Row>
                      </RadioButtonGroup>
                    </Form>
                    {
                      <Centered>
                        <SuccessRow
                          style={{
                            display:
                              this.state.showAnswer && !errors.result
                                ? "flex"
                                : "none"
                          }}
                        >
                          <p>{correctOutput}</p>
                          <p>
                            <a
                              href={link}
                              target="_blank"
                              rel="nofollow noopener noreferrer"
                            >
                              {linkText}
                            </a>
                          </p>
                        </SuccessRow>
                      </Centered>
                    }
                  </Fragment>
                )}
              </Formik>
            )}
          </LiveMessenger>
        </LiveAnnouncer>
      </Fragment>
    );
  }
}
export default class FeedbackGame extends Component {
  render() {
    return (
      <GameBackground>
        <h1 style={{ color: palette.black }}>Feedback Game</h1>
        <Tabs>
          <TabList>
            {gameSteps.map((item, index) => (
              <Tab style={{ color: palette.black }} key={index}>
                Question {index + 1}
              </Tab>
            ))}
          </TabList>
          {gameSteps.map((step, index) => (
            <TabPanel key={index}>
              <GameStepButtons key={index} {...step} />
            </TabPanel>
          ))}
        </Tabs>
      </GameBackground>
    );
  }
}
