export default {
  id: "game1",
  label: "Game One",
  fields: [],
  pattern: new RegExp(`:::md-component Game1$`),
  fromBlock: function() {
    return {
    };
  },
  toBlock: function() {
    return ":::md-component Game1";
  },
  toPreview: function() {
    return 'Game 1';
  }
};