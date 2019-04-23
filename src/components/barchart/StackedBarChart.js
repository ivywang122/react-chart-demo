import React, { PureComponent } from 'react'
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LabelList
} from 'recharts';
import { Row, Col } from 'react-bootstrap'
import Circle from '\\svgElements/Circle'
import Text from '\\svgElements/Text'
import styled from 'styled-components';
export default class StackedBarChart extends PureComponent {
  constructor(props) {
    super(props)
    this.handleClick = this._handleClick.bind(this);
    this.state = {
      data: [
        {
          name: 'Jan', rec: 10, ord: 10, sal: 10, total: 30
        },
        {
          name: 'Feb', rec: 30, ord: 30, sal: 30, total: 90
        },
        {
          name: 'Mar', rec: 15, ord: 15, sal: 35, total: 65
        },
        {
          name: 'Apr', rec: 20, ord: 60, sal: 15, total: 95
        },
        {
          name: 'May', rec: 40, ord: 20, sal: 20, total: 80
        },
        {
          name: 'Jun', rec: 15, ord: 15, sal: 0, total: 30
        },
        {
          name: 'Jul', rec: 25, ord: 25, sal: 35, total: 85
        },
        {
          name: 'Aug', rec: 20, ord: 20, sal: 50, total: 90
        },
        {
          name: 'Sep', rec: 15, ord: 20, sal: 35, total: 70
        },
        {
          name: 'Oct', rec: 35, ord: 35, sal: 0, total: 70
        },
        {
          name: 'Nov', rec: 25, ord: 20, sal: 25, total: 70
        },
        {
          name: 'Dec', rec: 15, ord: 15, sal: 15, total: 45
        },
      ],
      activeIndex: 0,
    }
  }
  componentDidMount() {
  }
  componentWillUnmount() {
  }
  componentDidUpdate(prevProp, prevState) {
  }

  render() {
    const { data, activeIndex } = this.state;
    const activeItem = data[activeIndex];
    return (
      <div>
        <Row>
          <Col>
             <BarChart
                width={800}
                height={400}
                data={data}
                margin={{ left: 0, right: 50 }}
              >
                <defs>
                  <linearGradient id="colorRec" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#FFE785" stopOpacity={1}/>
                    <stop offset="100%" stopColor="#FF8A5D" stopOpacity={1}/>
                  </linearGradient>
                  <linearGradient id="colorOrd" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#FF4E98" stopOpacity={1}/>
                    <stop offset="100%" stopColor="#FF4246" stopOpacity={1}/>
                  </linearGradient>
                  <linearGradient id="colorSal" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#01DDFF" stopOpacity={1}/>
                    <stop offset="100%" stopColor="#6A58FF" stopOpacity={1}/>
                  </linearGradient>
                </defs>

                <CartesianGrid
                  vertical={false}
                  stroke={`#6C7B90`}
                  strokeDasharray='1 2' 
                />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip cursor={{ fill: '#3D3B4F', fillOpacity: 0.85 }} contentStyle={{display: 'none'}} />
                <Legend 
                  align={`right`}
                  verticalAlign="top"
                  height={40}
                  iconSize={20}
                  wrapperStyle={{ top: 0, right: 40, color: '#e9ecef' }}
                />
                <Bar dataKey="rec" stackId="a" fill="url(#colorRec)" onClick={this.handleClick}>
                  { data.map((entry, index) => (
                    <Cell key={`cell-${index}`} cursor="pointer" fillOpacity={index === activeIndex ? 1 : 0.5} />
                  )) }
                </Bar>
                <Bar dataKey="ord" stackId="a" fill="url(#colorOrd)" onClick={this.handleClick}>
                  { data.map((entry, index) => (
                    <Cell key={`cell-${index}`} cursor="pointer" fillOpacity={index === activeIndex ? 1 : 0.5} />
                  )) }
                </Bar>
                <Bar dataKey="sal" stackId="a" fill="url(#colorSal)" onClick={this.handleClick}>
                  { data.map((entry, index) => (
                    <Cell key={`cell-${index}`} cursor="pointer" fillOpacity={index === activeIndex ? 1 : 0.5} />
                  )) }
                  <LabelList dataKey="total" content={<CustomLabel />} />
                </Bar>
              </BarChart>
          </Col>
          <Col>
            <InfoBlock>
              <p className="info-name">{activeItem.name}</p>
              <p><span>Rec</span>{activeItem.rec}</p>
              <p><span>Order</span>{activeItem.ord}</p>
              <p><span>Sale</span>{activeItem.sal}</p>
              <p className="info-total"><span>Total</span>{activeItem.total}</p>
            </InfoBlock>
          </Col>
        </Row>
       
      </div>
      
    );
  }

  _handleClick(data, index) {
    this.setState({ activeIndex: index })
  }
}


const CustomLabel = props => {
  const { x, y ,width, height, value, fillOpacity } = props;
  const radius = 15;
  
  if(value < 75) {
    return (
      <g>
        <Text 
          x={x + width / 2} 
          y={y - 8} 
          fill="#fff" 
          fontSize={12}
          value={value}
          textAnchor="middle" 
          dominantBaseline="middle"
          fillOpacity={fillOpacity}
        />
      </g>
    );
  }
  return (
    <g>
      <Circle fill={`#EB0042`} cx={x + width / 2} cy={y - radius + 15} r={radius} opacity={fillOpacity} />
      <Text 
        x={x + width / 2} 
        y={y - radius + 15} 
        fill="#fff" 
        fontSize={12}
        value={value}
        textAnchor="middle" 
        dominantBaseline="middle"
        fillOpacity={fillOpacity} 
      />
    </g>
  );
}

const InfoBlock = styled.div`
  display: inline-block;
  background-color: ${props => props.theme.colors.gray900};
  border-radius: 3px;
  margin-top: 40px;
  padding: 20px;
  color: ${props => props.theme.colors.gray300};
  box-shadow: 0 0 30px black;
  p{ 
    margin: 0; 
    line-height: 1.7;
    font-size: 16px;
    span{ 
      display: inline-block;
      width: 120px; 
    }
    &.info-name{
      font-size: 24px;
      font-weight: 500;
      margin-bottom: 5px;
      border-bottom: 1px solid ${props => props.theme.colors.gray700};
    }
    &.info-total{
      color: ${props => props.theme.colors.blue};
    }
  }
`;