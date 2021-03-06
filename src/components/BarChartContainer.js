import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Block, Title } from '../styled/CommonStyled'
import SimpleBarChart from './barchart/SimpleBarChart'
import SimpleLineChartVertical from './barchart/SimpleLineChartVertical'
import StackedBarChart from './barchart/StackedBarChart'
import BrushBarChart from './barchart/BrushBarChart'
import EchartZoomBarChart from './barchart/EchartZoomBarChart'
class MyComponent extends Component {
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
      <div>
        <Block>
          <Container>
            <Row>
              <Col>
                <Title>Simple Bar Chart</Title>
                <SimpleBarChart />
              </Col>
              <Col>
                <Title>Customized Vertical Bar Chart(with commas)</Title>
                <SimpleLineChartVertical />
              </Col>
            </Row>
          </Container>
        </Block>
        <Block center color="#030227">
          <Container>
            <Title center>Customized Gradient Stacked Bar Chart</Title>
            <StackedBarChart />
          </Container>
        </Block>
        <Block center>
          <Container>
            <Title center>Simple Brush Bar Chart</Title>
            <BrushBarChart />
          </Container>
        </Block>
        <Block center color="#030227">
          <Container>
            <Title center>Echart Zoom Bar Chart</Title>
            <EchartZoomBarChart />
          </Container>
        </Block>
      </div>
    );
  }
}
export default MyComponent