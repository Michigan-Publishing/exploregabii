export default {
  id: "game2",
  label: "Game Two",
  fields: [],
  pattern: new RegExp(`:::md-component Game2$`),
  fromBlock: function() {
    return {
    };
  },
  toBlock: function() {
    return ":::md-component Game2";
  },
  toPreview: function() {
    return 'Game 2';
  }
};