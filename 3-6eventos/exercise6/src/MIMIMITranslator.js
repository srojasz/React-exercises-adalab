import React from 'react';

class MIMIMITranslator extends React.Component {
  constructor(props) {
    super(props);

    this.translateText = this.translateText.bind(this);
  };


  translateText(str) {
    return (
      <div>
        {
          str.replace(/[aeiou]/gi, '')
        }

      </div>
    )
  }

  render() {

    const newText = this.props.text;


    return (
      <div>
        <p text={newText}>{newText}
        </p>
      </div >
    )


  }
}

export default MIMIMITranslator;