import React from 'react';

class TextInput extends React.Component {

  render() {
    const actionToPerform = this.props.actionToPerform;
    return (
      <form>
        <textarea onChange={actionToPerform}>

        </textarea>
      </form>
    )
  }
}

export default TextInput;