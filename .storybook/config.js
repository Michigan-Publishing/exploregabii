import React from "react"
import { configure, addDecorator } from "@storybook/react"
import { withKnobs } from "@storybook/addon-knobs"
import { ThemeProvider } from "styled-components"
import { theme } from "../src/constants/theme"

// automatically import all files ending in *.stories.js
const req = require.context("../src", true, /\.stories\.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>)
addDecorator(withKnobs)
configure(loadStories, module)
