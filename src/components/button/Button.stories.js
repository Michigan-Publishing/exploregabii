import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { linkTo } from "@storybook/addon-links"

import { Button, ButtonLink } from "./Button"

storiesOf("Button", module)
  .add("Button", () => <Button onClick={action("CLICK")}>Button</Button>)
  .add("ButtonLink", () => <ButtonLink>Link</ButtonLink>)
