import React from 'react';
import css from './stylesheets/app.css'
import MediaCard from '../../exercise3/src/MediaCard'
import image from './/images/sara.jpg'

class App extends React.Component {
  render() {
    return (
      <MediaCard
        name="Sara Rojas"
        img={image}
        date="10 de diciembre de 2019"
        alt="Foto de Sara Rojas"
        likes="37"
      />
    )
  }
}

export default App;
