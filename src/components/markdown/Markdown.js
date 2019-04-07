import React from "react"
import marksy from "marksy/components"
import { FulcrumImageVideo, FulcrumTextAudio } from "../fulcrum"
import AboutTheAuthor from "../aboutTheAuthor"

const compile = marksy({
  createElement: React.createElement,
  components: {
    FulcrumImageVideo,
    FulcrumTextAudio,
    AboutTheAuthor,
  },
})

const Markdown = ({ children }) => children && compile(children).tree

export default Markdown
