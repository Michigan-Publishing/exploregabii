import React from "react"
import { configure, addDecorator } from "@storybook/react"
import { withKnobs } from "@storybook/addon-knobs"
import { theme, Provider } from "../src/constants/theme"
import { withA11y } from "@storybook/addon-a11y"

// automatically import all files ending in *.stories.js
const req = require.context("../src", true, /\.stories\.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

addDecorator(story => (
  <Provider theme={theme}>
    <>{story()}</>
  </Provider>
))
addDecorator(withKnobs)
addDecorator(withA11y)

configure(loadStories, module)
