import React from "react";

const getRandomInteger = maxNumber => Math.floor(Math.random() * maxNumber);
const NUMBER_OF_CATS = 10;

class RandomCat extends React.Component {
  render() {
    const randomCat = getRandomInteger(NUMBER_OF_CATS);

    return (
      <div>
        <a href="http://lorempixel.com">
          <img src={`http://lorempixel.com/${this.props.width || 400}/${this.props.height || 200}/cats/${randomCat}`} alt="Random cat" />
        </a>
      </div>
    );
  }
}

export default RandomCat;
