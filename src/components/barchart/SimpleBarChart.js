import React, { PureComponent } from 'react'
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: 'January', re: 4000, sa: 2400
  },
  {
    name: 'February', re: 3000, sa: 1398
  },
  {
    name: 'March', re: 2000, sa: 8400
  },
  {
    name: 'April', re: 2780, sa: 3908
  },
  {
    name: 'May', re: 1890, sa: 4800
  },
  {
    name: 'June', re: 2390, sa: 3800
  },
  {
    name: 'July', re: 3490, sa: 4300
  },
  {
    name: 'August', re: 1285, sa: 2600
  },
  {
    name: 'September', re: 6580, sa: 7200
  },
  {
    name: 'Octobar', re: 4780, sa: 3200
  },
  {
    name: 'November', re: 5600, sa: 7200
  },
  {
    name: 'December', re: 3675, sa: 6200
  }
];
class SimpleBarChart extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  componentDidMount() {
  }
  componentWillUnmount() {
  }
  componentDidUpdate(prevProp, prevState) {
  }

   render() {
    return (
      <BarChart
        width={500}
        height={400}
        data={data}
        margin={{ right: 15, left: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis 
          dataKey="name" 
          height={80}
          minTickGap={-60}
          tick={<CustomizedTick />} />
        <YAxis />
        <Tooltip cursor={{ fill: 'blue', fillOpacity: 0.25 }} />
        <Legend 
          align={`right`}
          verticalAlign="top"
          height={40}
          iconSize={20}
          wrapperStyle={{ top: 0, right: 0 }}
        />
        <Bar dataKey="re" name="Receipt" fill="#1d2b69" />
        <Bar dataKey="sa" name="Sale" fill="#fd3c40" />
      </BarChart>
    );
  }
}

class CustomizedTick extends PureComponent {
  render() {
    let { x, y, payload } = this.props;
    let val = payload.value.substring(0, 3);
    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={15} fontSize={12} textAnchor="end" transform="rotate(-35)" fill="#666">{val}</text>
      </g>
    );
  }
}
export default SimpleBarChart