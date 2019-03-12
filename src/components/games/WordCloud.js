import React, { Component } from "react";
import WordCloudGame from "../wordcloud";

const data = [
  { text: "Email", value: 124 },
  { text: "Text", value: 101 },
  { text: "To-do list", value: 46 },
  { text: "Journal", value: 44 },
  { text: "Correspondence", value: 31 },
  { text: "Social media", value: 24 },
  { text: "Lesson plan", value: 22 },
  { text: "Blog", value: 20 }
];

export default class WordCloud extends Component {
  render() {
    return <WordCloudGame data={data} />;
  }
}
