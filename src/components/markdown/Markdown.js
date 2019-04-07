import React from "react"
import marksy from "marksy/components"
import { FulcrumImageVideo, FulcrumTextAudio } from "../fulcrum"
import { Game1, Game2, PieChart, WordCloud, MultimodalGame } from "../games"
import AboutTheAuthor from "../aboutTheAuthor"

const compile = marksy({
  createElement: React.createElement,
  components: {
    FulcrumImageVideo,
    FulcrumTextAudio,
    Game1,
    Game2,
    PieChart,
    WordCloud,
    MultimodalGame,
    AboutTheAuthor,
  },
})

const Markdown = ({ children }) => children && compile(children).tree

export default Markdown
