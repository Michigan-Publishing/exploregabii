export default {
  id: "wordCloudGame",
  label: "Word Cloud Game",
  fields: [],
  pattern: new RegExp(`:::md-component WordCloud$`),
  fromBlock: function() {
    return {
    };
  },
  toBlock: function() {
    return ":::md-component WordCloud";
  },
  toPreview: function() {
    return 'Word Cloud Game';
  }
};