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
    const { transform, fill, fontFamily, fontSize, value } = this.props;
    return(
      <text transform={transform} fill={fill} fontFamily={fontFamily} fontSize={fontSize}>{value}</text>
    );
  }
}
