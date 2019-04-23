import React, { PureComponent } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SimpleLineChart from './linechart/SimpleLineChart'
import CustLabelLineChart from './linechart/CustLabelLineChart'
import CustUiDesignLineChart from './linechart/CustUiDesignLineChart'
import { Block, Title } from '../styled/CommonStyled'

class LineChartContainer extends PureComponent {
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
                <Title>45deg XAxis Simple Line Chart</Title>
                <SimpleLineChart />
              </Col>
              <Col>
                <Title>Customized Label Line Chart(>5000)</Title>
                <CustLabelLineChart />
              </Col>
            </Row>
          </Container>
        </Block>
        <Block center color={'#021631'}>
          <Container>
            <Title center>Customized UI Design Line Chart</Title>
            <CustUiDesignLineChart />
          </Container>
        </Block>  
      </div>
    );
  }
}

export default LineChartContainer