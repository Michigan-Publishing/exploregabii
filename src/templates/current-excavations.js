import React from "react"
import Layout from "../components/Layout"
import MapNavigation from "../components/MapNavigation"
import imageSrc from "./current_excavations.png"
import { escapeWithRegexp } from "../utils/escape"
import styled from "styled-components"

const areas = [
  {
    shape: "rect",
    href: "the-roads-of-gabii/",
    coords: "[ 628, 388, 399, 351 ]",
    name: "The roads of Gabii",
    alt: "The roads of Gabii",
  },
  {
    shape: "rect",
    href: "excavation-areas/",
    coords: "[714,97,480,64]",
    name: "Excavation areas",
    alt: "Excavation areas",
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
