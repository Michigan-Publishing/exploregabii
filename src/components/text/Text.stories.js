import React from "react"

import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { linkTo } from "@storybook/addon-links"

import Text from "./Text"

storiesOf("Text", module).add("with text", () => <Text>This is some text</Text>)
