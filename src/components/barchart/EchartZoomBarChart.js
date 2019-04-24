import React, { PureComponent } from 'react'
import ReactEcharts from 'echarts-for-react'
import echarts from 'echarts/lib/echarts';
import obamaData from '\\data/obamaData'
export default class EchartZoomBarChart extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      option: {

        title: {
          text: 'This is Title',
          textStyle: { color: '#fff' }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
            label: {
              show: true
            }
          }
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        calculable: true,
        legend: {
          data: ['Growth', 'Budget 2011', 'Budget 2012'],
          itemGap: 5
        },
        grid: {
          top: '12%',
          left: '1%',
          right: '10%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: obamaData.names
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: 'Budget (million USD)',
            axisLabel: {
              formatter: function (a) {
                a = +a;
                return isFinite(a)
                  ? echarts.format.addCommas(+a / 1000)
                  : '';
              }
            }
          }
        ],
        dataZoom: [
          {
            show: true,
            start: 94,
            end: 100
          },
          {
            type: 'inside',
            start: 94,
            end: 100
          },
          {
            show: true,
            yAxisIndex: 0,
            filterMode: 'empty',
            width: 30,
            height: '80%',
            showDataShadow: false,
            left: '93%'
          }
        ],
        series: [
          {
            name: 'Budget 2011',
            type: 'bar',
            data: obamaData.budget2011List
          },
          {
            name: 'Budget 2012',
            type: 'bar',
            data: obamaData.budget2012List
          }
        ]
      
      }
    }
  }
  componentDidMount() {

  }
  componentWillUnmount() {
  }
  componentDidUpdate(prevProp, prevState) {
  }

  render() {
    const { option } = this.state;
    return (
      <div>
        <ReactEcharts
          option={option}
          style={{ height: '350px', width: '100%' }}
          className='react_for_echarts' />
      </div>
    );
  }

 
}
