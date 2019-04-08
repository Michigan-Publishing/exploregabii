import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { linkTo } from "@storybook/addon-links"

import Logo, { variants } from "./Logo"

storiesOf("Logo", module).add("default", () => (
  <Logo variant={variants.primary} />
))
