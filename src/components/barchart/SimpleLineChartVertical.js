import React, { PureComponent } from 'react'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import styled, {css} from 'styled-components'

export default class SimpleLineChartVertical extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        {
          name: 'Chairs', re: 328449
        },
        {
          name: 'Storage', re: 223844
        },
        {
          name: 'Tables', re: 206966
        },
        {
          name: 'Binder', re: 203413
        },
        {
          name: 'Bookcases', re: 114880
        },
        {
          name: 'Appliances', re: 107532
        },
        {
          name: 'Funishings', re: 91705
        },
        {
          name: 'Paper', re: 78479
        },
        {
          name: 'Supplies', re: 46674
        },
        {
          name: 'Art', re: 27119
        },
        {
          name: 'Envelopes', re: 16476
        },
        {
          name: 'Labels', re: 12486
        }
      ]
    }
  }
  componentDidMount() {
  }
  componentWillUnmount() {
  }
  componentDidUpdate(prevProp, prevState) {
  }

  render() {
    let {data} = this.state;
    // data.forEach(el => el.re = el.re.toLocaleString());
    // console.log(data)
    return (
      <BarChart
        layout={`vertical`}
        width={500}
        height={400}
        data={data}
        margin={{ right: 15, left: 0 }}
      >
        <CartesianGrid horizontal={false} strokeDasharray="3 3" />
        <XAxis type="number" tick={<CustXAxisTick />} />
        <YAxis 
          dataKey="name" 
          type="category"
          width={80}
          minTickGap={-60}
          tick={{fontSize: 12}} 
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend
          align={`right`}
          verticalAlign="top"
          height={40}
          iconSize={20}
          wrapperStyle={{ top: 0, right: 0 }}
        />
        <Bar dataKey="re" name="Sales Number" fill="#4E79A7" />
      </BarChart>
    );
  }
}

class CustXAxisTick extends PureComponent {
  render() {
    let { x, y, payload } = this.props;
    let val = payload.value.toLocaleString();
    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={15} fontSize={14} textAnchor="end" fill="#666">{val}</text>
      </g>
    );
  }
}

const getIntro = val => {
  if (val > 200000) {
    return "Best sales";
  }else if(val > 50000) {
    return "Sales of general";
  }else {
    return "Poor sales";
  }
};

const CustomTooltip = ({ active, payload, label }) => {
  if(active) {
    let val = payload[0].value.toLocaleString();
    return (
      <CustTooltipWrapper val={payload[0].value}>
        <p className="label">{`${label} : ${val}`}</p>
        <p className="intro">{getIntro(payload[0].value)}</p>
      </CustTooltipWrapper>
    );
  }
  return null
}

const CustTooltipWrapper = styled.div`
  background-color: ${props => props.theme.colors.gray900};
  color: ${props => props.theme.colors.gray300};
  border-radius: 3px;
  padding: 10px;
  width: 200px;
  .intro{
    ${props => {
      if(props.val > 200000) {
        return css`
          font-weight: 800;
          color: ${props.theme.colors.green};
        `;
      }else if (props.val > 50000) {
        return css`
          color: ${props.theme.colors.gray500};
        `;
      } else {
        return css`
          font-weight: 800;
          color: ${props.theme.colors.red};
        `;
      }
    }}
  }
`;
