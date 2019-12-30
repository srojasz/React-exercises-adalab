import React from 'react';


class HalfPage extends React.Component {
  render() {
    return (
      <div className={this.props.styling} role="alert">
        {this.props.children}
      </div>
    );
  }
}
export default HalfPage;
