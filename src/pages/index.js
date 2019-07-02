import React from "react"
import Layout from "../components/Layout"
import IllustratedMap from "../components/IllustratedMap"

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
export default () => (
  <Layout footerLinks={links}>
    <Layout.Content>
      <IllustratedMap />
    </Layout.Content>
  </Layout>
)
