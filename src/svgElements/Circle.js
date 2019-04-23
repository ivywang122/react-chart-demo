import React, { PureComponent } from 'react'
export default class Circle extends PureComponent {
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
    const { fill, cx, cy, r, stroke, strokeWidth, opacity, ...rest } = this.props
    return(
      <circle fill={fill} cx={cx} cy={cy} r={r} stroke={stroke} strokeWidth={strokeWidth} opacity={opacity} {...rest} />
    );
  }
}
