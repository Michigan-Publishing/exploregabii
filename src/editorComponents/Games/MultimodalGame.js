export default {
  id: "multimodalGame",
  label: "Multimodal Game",
  fields: [],
  pattern: new RegExp(`:::md-component MultimodalGame$`),
  fromBlock: function() {
    return {
    };
  },
  toBlock: function() {
    return ":::md-component MultimodalGame";
  },
  toPreview: function() {
    return 'Multimodal Game';
  }
};