export default {
  id: "expandableBlockQuote",
  label: "Expandable Block Quote",
  fields: [
    { name: "previewText", label: "Preview Text", widget: "string" },
    { name: "fullText", label: "Full Text", widget: "markdown" },
  ],
  pattern: new RegExp(':::md-component ExpandableBlockquote previewText="(.*?)" fullText="(.*?)"$'),
  fromBlock: function(match) {
    return {
      previewText: unescape(match[1]),
      fullText: unescape(match[2]),
    };
  },
  toBlock: function(obj) {
    return `:::md-component ExpandableBlockquote previewText="${escape(obj.previewText)}" fullText="${escape(obj.fullText)}"`;
  },
  toPreview: function(obj) {
    return obj.fullText;
  }
};
