export default {
  id: "pieChartGame",
  label: "Pie Chart Game",
  fields: [],
  pattern: new RegExp(`:::md-component PieChart$`),
  fromBlock: function() {
    return {
    };
  },
  toBlock: function() {
    return ":::md-component PieChart";
  },
  toPreview: function() {
    return 'Pie Chart Game';
  }
};