import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { linkTo } from "@storybook/addon-links"

import { MapNavigation } from "./MapNavigation"

const areas = [
  { shape: 'rect', coords: [0, 0, 410, 154], href: "page.html", name: "40w 20h", alt: "This is the alt" },
  { shape: 'rect', coords: [411, 0, 1024, 309], href: "page.html", name: "60w 40h", alt: "This is the alt" },
  { shape: 'rect', coords: [0, 155, 410, 768], href: "page.html", name: "40w 80h", alt: "This is the alt" },
  { shape: 'rect', coords: [411, 310, 1024, 768], href: "page.html", name: "60w 60h", alt: "This is the alt" },
];

var MAP = {
	name: 'my-map',
	areas
};

storiesOf("MapNavigation", module).add("default", () => (
  <MapNavigation imageSrc="https://www.fillmurray.com/1024/768" map={MAP} />
))
