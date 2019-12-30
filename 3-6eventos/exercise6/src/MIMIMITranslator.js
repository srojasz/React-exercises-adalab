import React from 'react';

class MIMIMITranslator extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>{this.props.text}</p>
      </div>
    )


  }
}

export default MIMIMITranslator;