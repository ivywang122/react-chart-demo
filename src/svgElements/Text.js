import React, { PureComponent } from 'react'
export default class Text extends PureComponent {
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
    const { x, y, fill, fontSize, value, ...rest } = this.props;
    return(
      <text x={x} y={y} fill={fill} fontSize={fontSize} {...rest}>{value}</text>
    );
  }
}
