import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  {
    name: 'Point A', ps: 4000, as: 2400, amt: 2400,
  },
  {
    name: 'Point B', ps: 3000, as: 1398, amt: 2210,
  },
  {
    name: 'Point C', ps: 2000, as: 8400, amt: 2290,
  },
  {
    name: 'Point D', ps: 2780, as: 3908, amt: 2000,
  },
  {
    name: 'Point E', ps: 1890, as: 5300, amt: 2181,
  },
  {
    name: 'Point F', ps: 2390, as: 3800, amt: 2500,
  },
  {
    name: 'Point G', ps: 3490, as: 4300, amt: 2100,
  },
];

class CustomLabel extends PureComponent {
  render() {
    const { x, y, stroke, value } = this.props;
    if(value > 5000){
      return <text x={x} y={y} dy={-8} fill={stroke} fontSize={12} textAnchor="middle">{value}</text>;
    }else {
      return <text />;
    }
  }
}

// class CustomizedAxisTick extends PureComponent {
//   render() {
//     const {
//       x, y, payload,
//     } = this.props;

//     return (
//       <g transform={`translate(${x},${y})`}>
//         <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-35)">{payload.value}</text>
//       </g>
//     );
//   }
// }

export default class RechartSimpleDemo2 extends PureComponent {

  render() {
    return (
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{ right: 15, left: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis 
          dataKey="name" 
          height={60}
          angle={-30}
          textAnchor="end" 
          dy={10}
        />
        <YAxis />
        <Tooltip />
        <Legend 
          verticalAlign="top" 
          height={40} 
          iconSize={20}
          wrapperStyle={{ top: 0, left: '10px'}}
        />
        <Line type="monotone" name="Actural Sale" dataKey="as" stroke="#1900b3" label={<CustomLabel stroke={'red'}/>} />
        <Line type="monotone" name="Predicted Sale" dataKey="ps" stroke="#ff9d05" />
      </LineChart>
    );
  }
}

