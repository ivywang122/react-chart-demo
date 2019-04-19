import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine } from 'recharts';
import styled from 'styled-components'

const data = [
  {
    name: 'Jan', blue: 2.2, red: 4.3, lime: 1.7,
  },
  {
    name: 'Feb', blue: 4.4, red: 2.0, lime: 2.2,
  },
  {
    name: 'Mar', blue: 2.0, red: 2.6, lime: 3.3,
  },
  {
    name: 'Apr', blue: 3.0, red: 4.0, lime: 5.6,
  },
  {
    name: 'Jun', blue: 4.8, red: 7.8, lime: 4.5,
  },
  {
    name: 'Jul', blue: 1.2, red: 3.2, lime: 1.8,
  },
];

class CustLegend extends PureComponent {
  render() {
    const { payload, activeLine } = this.props;

    return (
    <LegendBlock>
      <LengendItem
        isActive={activeLine === 'All'}
        onClick={() => this.props.onClick('All')}
      >
        <svg width={16} height={16} viewBox="0 0 16 16">
          <Circle stroke={`white`} cx={8} cy={8} r={8} />
          <Circle stroke={`#02152F`} cx={8} cy={8} r={4} />
        </svg>
        <span>All</span>
      </LengendItem>
      {payload.map((entry, index) => (
        <LengendItem 
          key={`item-${index}`} 
          isActive={activeLine === entry.value}
          onClick={() => this.props.onClick(entry.value)}
        >
          <svg width={16} height={16} viewBox="0 0 16 16">
            <Circle stroke={entry.color} cx={8} cy={8} r={8} />
            <Circle stroke={`#02152F`} cx={8} cy={8} r={4} />
          </svg>
          <span>{entry.value}</span>
        </LengendItem>
      ))}
    </LegendBlock>
  );
  }
  
} 

export default class CustUiDesignLineChart extends PureComponent {
  constructor(props) {
    super(props)
    this.onLineChange = this._onLineChange.bind(this)

    this.state = {
      activeLine: 'All',
      opacity: {
        blue: 1,
        red: 1,
        lime: 1
      }
    }
  }
  render() {
    const { activeLine, opacity } = this.state;
    return (
      <LineChart 
        width={900} 
        height={420} 
        data={data} 
        margin={{ left: 0, right: 50 }}
      >
        <CartesianGrid 
          vertical={false}
          stroke={`#6C7B90`}
          strokeDasharray='1 2'
        />
        <XAxis
          dataKey="name" 
          padding={{ left: 60, right: 60 }}
          stroke={`#6C7B90`}
        />
        <YAxis
          domain={[0,9]}
          ticks={[0,1,2,3,4,5,6,7,8,9]}
          minTickGap={1}
          interval="preserveStartEnd"
          stroke={`#6C7B90`}
        />
        <Tooltip />
        <Legend 
          iconSize={24} 
          iconType={`rect`}
          content={<CustLegend activeLine={activeLine} onClick={this.onLineChange} />} 
        />
        <Line 
          type="monotone" 
          dataKey="blue" 
          name="Blue" 
          stroke="#00BBD6" 
          strokeWidth={2} 
          strokeOpacity={opacity.blue}
          strokeDasharray={activeLine === 'Blue' || activeLine === 'All'? null : '5 5'} 
          dot={<CustomizedDot />} 
        />
        <Line 
          type="monotone" 
          dataKey="red" 
          name="Red" 
          stroke="#F8364B" 
          strokeWidth={2} 
          strokeOpacity={opacity.red} 
          strokeDasharray={activeLine === 'Red' || activeLine === 'All'? null : '5 5'} 
          dot={<CustomizedDot />} 
          activeDot={<CustomizedActiveDot />} 
        />
        <Line 
          type="monotone" 
          dataKey="lime" 
          name="Lime" 
          stroke="#B3D236" 
          strokeWidth={2} 
          strokeOpacity={opacity.lime}
          strokeDasharray={activeLine === 'Lime' || activeLine === 'All'? null : '5 5'} 
          dot={<CustomizedDot activeLine={activeLine}/>} 
        />
      </LineChart>
    );
  }


  _onLineChange(line) {
    let { opacity } = this.props;
    if(line === 'Red')
      opacity = { blue: 0.5, red: 1, lime: 0.5 }
    else if (line === 'Lime')
      opacity = { blue: 0.5, red: 0.5, lime: 1 }
    else if (line === 'Blue')
      opacity = { blue: 1, red: 0.5, lime: 0.5 }
    else 
      opacity = { blue: 1, red: 1, lime: 1 }
    this.setState({ activeLine: line, opacity })
  }
}

const Circle = props => {
  console.log(props.activeLine)
  return <circle fill={props.stroke} cx={props.cx} cy={props.cy} r={props.r} opacity={props.opacity} />
}

const Text = props => {
  return <text transform="matrix(1 0 0 1 12.6514 37.5459)" fill="white" fontFamily={`微軟正黑體`} fontSize="24">{props.value}</text>
}

const CustomizedDot = props => {
  const { cx, cy, stroke, activeLine } = props;
  // console.log(props.activeLine)
  return (
    <svg x={cx - 8} y={cy - 8} width={16} height={16} viewBox="0 0 16 16" >
      <Circle stroke={stroke} cx={8} cy={8} r={8} activeLine={activeLine} />
      <Circle stroke={`#02152F`} cx={8} cy={8} r={4} />
    </svg>
  );
  
}


const CustomizedActiveDot = props => {
  let { cx, cy, fill, value } = props;
  value = value.toFixed(1);
  if(cy < 60) cy += 90 

  return (
    <svg x={cx - 30} y={cy - 75} width={60} height={60} viewBox="0 0 60 60" >
      <Circle stroke={fill} cx={30} cy={30} r={30} />
      <Text value={value} />
    </svg>
  );
}

const LegendBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  float: right;
  height: 30px;
  background-color: ${props => props.theme.colors.gray900};
`;

const LengendItem = styled.div`
  padding: 0 10px;
  color: ${props => props.theme.colors.gray500};
  background-color: ${props => props.isActive? props.theme.colors.black : 'transparent'};
  cursor: pointer;
  &:hover{
    background-color: ${props => props.theme.colors.black};
  }
  svg{
    margin-right: 10px;
  }
`;
