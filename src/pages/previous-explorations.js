import React from "react"
import Layout from "../components/Layout"
import MapNavigation from "../components/MapNavigation"
import imageSrc from "./map.png"
import { escapeWithRegexp } from "../utils/escape"
import styled from "styled-components"

const links = [
  {
    title: "one",
    slug: "/test1",
    children: [
      { title: "one.first", slug: "/test1.one" },
      { title: "one.second", slug: "/test1.two" },
    ],
  },
  {
    title: "two",
    slug: "/test2",
    children: [
      { title: "two.first", slug: "/test1.one" },
      { title: "two.second", slug: "/test1.two" },
    ],
  },
  {
    title: "three",
    slug: "/test3",
    children: [
      { title: "three.first", slug: "/test3.one" },
      { title: "three.second", slug: "/test3.two" },
    ],
  },
]
// {
//   shape: "rect",
//   href: "/?path=/previous-explorations",
//   coords: "[ 0, 0, 496, 435 ]",
//   name: "Previous Explorations",
//   alt: "Visit previous explorations",
// },

const areas = [
  {
    shape: "rect",
    href: "/temple-of-juno",
    coords: "[ 163, 230, 375, 375 ]",
    name: "Temple of Juno",
    alt: "Temple of Juno",
  },
]

var MAP = {
  name: "Gabii Navigation",
  areas,
}

export default function PreviousExplorations(props) {
  return (
    <Layout footerLinks={links}>
      <Layout.Content
        my={24}
        contentStyle={{
          borderTop: 0,
          borderRight: 0,
          borderColor: "#895E34",
        }}
      >
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
