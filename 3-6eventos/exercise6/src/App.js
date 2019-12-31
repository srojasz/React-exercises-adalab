import React from 'react';
import TextInput from './TextInput';
import MIMIMITranslator from './MIMIMITranslator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.text = "Escribe lo que quieras";
    this.handleChange = this.handleChange.bind(this);

  };




  handleChange(event) {
    this.text = event.target.value;

    this.forceUpdate();

  }

  render() {
    return (

      <div>
        <MIMIMITranslator text={this.text} />
        <TextInput actionToPerform={this.handleChange} />
      </div>
    )
  }

}

export default App;
