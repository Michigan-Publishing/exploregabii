import React from "react"
import Layout from "../components/Layout"
import MapNavigation from "../components/MapNavigation"
import imageSrc from "./current_excavations.png"
import { escapeWithRegexp } from "../utils/escape"
import styled from "styled-components"

const areas = [
  {
    alt: "Area A",
    name: "Area A",
    href: "excavation-areas/area-a/",
    coords: "[566,198,424,92]",
    shape: "rect"
  },
  {
    alt: "Area F",
    name: "Area F",
    href: "excavation-areas/area-f",
    coords: "[130,297,399,452]",
    shape: "rect"
  },
  // {
  //   alt: "Area J",
  //   name: "Area J",
  //   href: "excavation-areas/area-j",
  //   coords: "[211,462,421,586]",
  //   shape: "rect",
  // },
  {
    alt: "Area H",
    name: "Area H",
    href: "excavation-areas/area-g-h",
    coords: "[468,549,647,617]",
    shape: "rect",
  },
  {
    alt: "Area G",
    name: "Area G",
    href: "excavation-areas/area-g-h",
    coords: "[468,447,623,545]",
    shape: "rect",
  },
  {
    alt: "Area I",
    name: "Area I",
    href: "excavation-areas/area-i",
    coords: "[618,411,704,396,718,444,772,454,778,521,666,524,629,490]",
    shape: "poly",
  },
  {
    alt: "Area C",
    name: "Area C",
    href: "excavation-areas/area-c",
    coords: "[744,393,810,393,839,450,765,445,739,427]",
    shape: "poly",
  },
  {
    alt: "Area E",
    name: "Area E",
    href: "excavation-areas/area-e",
    coords: "[901,251,968,333,836,394,810,373,728,386,715,355,882,250]",
    shape: "poly",
  },
  {
    alt: "Area D",
    name: "Area D",
    href: "excavation-areas/area-d",
    coords: "[643,384,614,349,674,187,857,167,878,226]",
    shape: "poly",
  },
  {
    alt: "Area B",
    name: "Area B",
    href: "excavation-areas/area-b",
    coords: "[391,238,469,249,477,349,400,346]",
    shape: "poly",
  },
]

var MAP = {
  name: "Gabii Navigation",
  areas,
}

export default function PreviousExplorations(props) {
  return (
    <Layout footerLinks={[]}>
      <Layout.Content
        my={24}
        contentStyle={{
          borderTop: 0,
          borderRight: 0,
          borderColor: "#FFF",
        }}
      >
        <MapNavigation
          ml="auto"
          mr="auto"
          imageSrc={imageSrc}
          map={escapeWithRegexp(JSON.stringify(MAP))}
          hideTag
        />
      </Layout.Content>
    </Layout>
  )
}
