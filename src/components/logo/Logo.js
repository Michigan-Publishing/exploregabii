import React from "react"
import src from "./primary.svg"

export const variants = {
  primary: "primary",
  dark: "dark",
  alternate: "alternate",
}

console.log("SRC", src)
function Logo({ variant = variants.primary }) {
  return <img src={require(`./${variant}.svg`)} alt="logo" />
}

export default Logo
