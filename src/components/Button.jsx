import React from 'react';

class Button extends React.Component {
  static defaultProps = {
    label: 'I am a button'
  };
  static propTypes = {
    label: React.PropTypes.string,
    onClick: React.PropTypes.func
  };
  constructor() {
    super()
  }
  render() {
    return (
      <button onClick={this.props.onClick}>
        {this.props.label}
      </button>
    )
  }
}
export default Button
