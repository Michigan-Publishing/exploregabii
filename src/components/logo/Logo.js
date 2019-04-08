import React from "react"
import src from "./primary.svg"

export const variants = {
  primary: "primary",
  light: "light",
  alternate: "alternate",
}

function Logo({ variant = variants.primary }) {
  return (
    <>
      <img src={src} />
      <img src={require(`./${variant}.svg`)} alt="logo" />
    </>
  )
}

export default Logo
