import React from 'react';
import CityImage from './CityImage'

class CitySelector extends React.Component {

  constructor(props) {
    super(props);
    this.selectedCity = "Selecciona una ciudad para ver su foto";
    this.handleClick = this.handleClick.bind(this);
  };


  handleClick(event) {
    this.selectedCity = event.target.value;
    this.forceUpdate();
    console.log(`tu destino elegido es ${this.selectedCity}`)

  };

  render() {


    return (
      <CityImage actionToPerform={this.handleClick} city={this.selectedCity} />
    );
  }
};
export default CitySelector;
