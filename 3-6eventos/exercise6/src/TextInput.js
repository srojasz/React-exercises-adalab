import React from 'react';

class TextInput extends React.Component {

  render() {
    const actionToPerform = this.props.actionToPerform;
    const translate = this.props.translate;
    return (
      <form>
        <textarea onChange={actionToPerform}>

        </textarea>
      </form>
    )
  }
}

export default TextInput;