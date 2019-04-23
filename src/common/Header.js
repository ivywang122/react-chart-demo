import React, { Component } from 'react'
import { withRouter, NavLink } from 'react-router-dom'

import styled from 'styled-components'

class Header extends Component {
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
      <HeaderContainer>
        <NavLink exact to="/" activeClassName="active">Line Chart</NavLink>
        <NavLink to="/BarChart">Bar Chart</NavLink>
        <NavLink to="/AreaChart">Area Chart</NavLink>
        <NavLink to="/PieChart">Pie Chart</NavLink>
        <NavLink to="/DoughnutChart">Doughnut Chart</NavLink>
        <NavLink to="/Liquid">Liquid Gauge</NavLink>
      </HeaderContainer>
    );
  }
}

const HeaderContainer = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  background-color: ${props => props.theme.colors.gray900};
  
  a{
    display: block;
    color: ${props => props.theme.colors.gray100};
    padding: 0.5rem 1rem;
    &.active{
      background-color: ${props => props.theme.colors.gray700};
    }
  }
`;
export default withRouter(Header)