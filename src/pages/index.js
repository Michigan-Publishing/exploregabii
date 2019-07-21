import React from "react"
import Layout from "../components/Layout"
import MapNavigation from "../components/MapNavigation"
import imageSrc from "./quadrant_map.png"
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

const areas = [
  {
    shape: "rect",
    href: "/?path=/story/contentpage--default",
    coords: "[ 0, 0, 496, 435 ]",
    name: "Previous Explorations",
    alt: "Visit previous explorations",
  },
  {
    shape: "rect",
    href: "/?path=/story/contentpage--default",
    coords: "[ 502, 0, 907, 390 ]",
    name: "Current Excavations",
    alt: "Visit current excavations",
  },
  {
    shape: "rect",
    href: "/?path=/story/contentpage--default",
    coords: "[ 0, 443, 502, 670 ]",
    name: "Introduction to the Gabii Project",
    alt: "Visit an introduction to the Gabii project",
  },
  {
    shape: "rect",
    href: "/?path=/story/contentpage--default",

    coords: "[ 502, 390, 907, 670 ]",
    name: "The Environment of Gabii",
    alt: "This is the alt",
  },
]

var MAP = {
  name: "Gabii Navigation",
  areas,
}

export default () => (
  <Layout footerLinks={links}>
    <Layout.Content style={{ marginTop: 24, marginBottom: 24 }}>
      <MapNavigation
        ml="auto"
        mr="auto"
        imageSrc={imageSrc}
        map={escapeWithRegexp(JSON.stringify(MAP))}
      />
    </Layout.Content>
  </Layout>
)
