import Chart from 'nnnick/chart.js@master:Chart.js';
import element from 'dekujs/virtual-element';

/**
 * Chart.
 */

export default {
  propTypes: {
    background: { type: 'string' },
    height: { type: 'number' },
    width: { type: 'number' },
    type: { type: 'string' }
  },

  afterRender({ props, state }, el) {
    let {type, children} = props;
    let data = children[0];

    let xData = [], yData = [];
    for (var key in data) {
      let point = data[key];

      xData.push(point[0]);
      point[1] ? yData.push(point[1]) : null;
    }

    let datasets = [
      {
        fillColor: "rgba(220,220,220,0.2)",
        strokeColor: "rgba(220,220,220,1)",
        pointColor: "rgba(220,220,220,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        data: xData
      }
    ];
    
    if (yData.length) {
      datasets.push({
        fillColor: "rgba(220,220,220,0.2)",
        strokeColor: "rgba(220,220,220,1)",
        pointColor: "rgba(220,220,220,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        data: yData
      });
    }

    let info = {
      labels: Object.keys(data),
      datasets: datasets
    };

    let ctx = el.getContext("2d");
    let chart = new Chart(ctx)[type](info, {
      scaleShowGridLines: false
    });
  },

  render({ props, state }, updateState) {
    let { width, height } = props;

    let attrs = {
      id: 'deku-Chart',
      height,
      width
    };

    return <canvas { ...attrs }></canvas>
  }
};
