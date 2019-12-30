import React from 'react';
import css from './stylesheets/app.css'
import MediaCard from './MediaCard'
import image from './/images/sara.jpg'
import image2 from './/images/nessi.png'
import image3 from './/images/nessi-paisano.png'

class MediaList extends React.Component {
  render() {
    return (
      <div>
        <MediaCard
          name="Sara Rojas"
          img={image}
          date="10 de diciembre de 2019"
          alt="Foto de Sara Rojas"
          likes="37"
        />
        <br />
        <MediaCard
          name="Nessi Astronauta"
          img={image2}
          date="10 de diciembre de 2019"
          alt="Foto de Nessi"
          likes="57"
        />
        <br />

        <MediaCard
          name="Nessi Normal"
          img={image3}
          date="10 de diciembre de 2019"
          alt="Foto de Nessi sin traje de astronauta"
          likes="23"
        />

      </div>
    )
  }
}

export default MediaList;
