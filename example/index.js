import element from 'dekujs/virtual-element';
import { deku, render } from 'dekujs/deku';
import Chart from '../lib';

let app = deku(<div style="display:block;text-align:center;margin-top:100px;">
  <Chart type="Line" width={818} height={409}>
    {
      {
        Jan: [65],
        Feb: [59],
        Mar: [80],
        Apr: [81],
        May: [56],
        Jun: [55],
        Jul: [40],
        Aug: [43],
        Sep: [22],
        Oct: [24],
        Nov: [61],
        Dec: [56]
      }
    }
  </Chart>
</div>);

render(app, document.querySelector('main'));
