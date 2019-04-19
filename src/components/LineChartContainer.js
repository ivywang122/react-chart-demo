import React, { PureComponent } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SimpleLineChart from './linechart/SimpleLineChart'
import CustLabelLineChart from './linechart/CustLabelLineChart'
import CustUiDesignLineChart from './linechart/CustUiDesignLineChart'
import styled, {css} from 'styled-components'

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

const Block = styled.div`
  padding: 40px 0;
  background-color: ${props => props.color? props.color : props.theme.colors.gray200};
  h2{
    color: ${props => props.color?  props.theme.colors.gray200 : null};
  }
  ${props => {
    if(props.center) {
      return css`
        .recharts-wrapper{
          margin: auto;
        }
      `
    }
  }}
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: .8em;
  text-align: ${props => props.center? 'center' : 'left'};
`;


export default LineChartContainer