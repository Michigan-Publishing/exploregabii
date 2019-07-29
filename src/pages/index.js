import React from "react"
import { useStaticQuery } from "gatsby"
import Layout from "../components/Layout"
import MapNavigation from "../components/MapNavigation"
import imageSrc from "./quadrant_map.png"
import { escapeWithRegexp } from "../utils/escape"
import styled from "styled-components"

const areas = [
  {
    shape: "rect",
    href: "/pages/explore-gabii/previous-explorations/",
    coords: "[ 0, 0, 496, 435 ]",
    name: "Previous Explorations",
    alt: "Visit previous explorations",
  },
  {
    shape: "rect",
    href: "/pages/explore-gabii/current-excavations/",
    coords: "[ 502, 0, 907, 390 ]",
    name: "Current Excavations",
    alt: "Visit current excavations",
  },
  {
    shape: "rect",
    href: "/pages/explore-gabii/the-gabii-project/",
    coords: "[ 0, 443, 502, 670 ]",
    name: "Introduction to the Gabii Project",
    alt: "Visit an introduction to the Gabii project",
  },
  {
    shape: "rect",
    href: "/pages/explore-gabii/the-environmant-of-gabii/",

    coords: "[ 502, 390, 907, 670 ]",
    name: "The Environment of Gabii",
    alt: "Visit the environment of Gabii",
  },
]

var MAP = {
  name: "Gabii Navigation",
  areas,
}

export default props => {
  return (
    <Layout>
      <Layout.Content my={24} p={20}>
        <MapNavigation
          ml="auto"
          mr="auto"
          imageSrc={imageSrc}
          map={escapeWithRegexp(JSON.stringify(MAP))}
        />
      </Layout.Content>
    </Layout>
  )
}

export const frontmatter = {
  title: "Explore Gabii",
  written: "2019-04-01",
  layoutType: "post",
  key: "explore-gabii",
  parentKey: undefined,
}

export const query = `

`
