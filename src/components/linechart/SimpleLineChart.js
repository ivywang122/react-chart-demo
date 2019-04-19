import React, { PureComponent } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const data = [
  {
    name: 'Point A', ps: 4000, as: 2400, amt: 2400,
  },
  {
    name: 'Point B', ps: 3000, as: 1398, amt: 2210,
  },
  {
    name: 'Point C', ps: 2000, as: 9800, amt: 2290,
  },
  {
    name: 'Point D', ps: 2780, as: 3908, amt: 2000,
  },
  {
    name: 'Point E', ps: 1890, as: 4800, amt: 2181,
  },
  {
    name: 'Point F', ps: 2390, as: 3800, amt: 2500,
  },
  {
    name: 'Point G', ps: 3490, as: 4300, amt: 2100,
  },
];
class RechartSimpleDemo1 extends PureComponent {
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
    return(
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{ right: 15, left: 0 }}
      >
        {/* Background Grid Line */}
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis 
          dataKey="name"
          height={60}
          angle={-45}
          textAnchor="end" 
          dy={10}
        />
        <YAxis />
        <Tooltip />
        <Legend 
          verticalAlign="top" 
          height={40} 
          iconSize={20}
          wrapperStyle={{ top: 0, left: '40px'}}
        />
        <Line type="monotone" name="Actural Sale" dataKey="as" stroke="#e59c82" activeDot={{ r: 12 }} />
        <Line type="monotone" name="Predicted Sale" dataKey="ps" stroke="#0079a8" activeDot={{ r: 8 }} />
      </LineChart>
    );
  }
}
export default RechartSimpleDemo1